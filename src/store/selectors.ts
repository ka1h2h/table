import { IFilter } from "./slices/FiltersSlice";
import { RootState } from "./index";
import { createSelector } from "reselect";
import { User } from "./api";

const selectAllUsers = (state: RootState) => state.users.allUsers;
const selectFilters = (state: RootState) => state.filters.filter;
type filtrationKeys = keyof Omit<IFilter, "page" | "sortBy">;

export const selectFiltratedUsers = createSelector(
  selectAllUsers,
  selectFilters,
  (users, filters) => {
    let start = filters.page === 1 ? 0 : filters.page * 10;
    let end = start + 20;
    let u: User[] = users.filter((item) => {
      if (
        f(item, filters, "name") &&
        f(item, filters, "sex") &&
        f(item, filters, "country")
      ) {
        return true;
      }
    });
    if (filters.sortBy && filters.sortBy in sortRules) {
      u = u.sort(sortRules[filters.sortBy].fn);
    }
    return {
      users: u.slice(start, end),
      count: u.length,
    };
  }
);

export const selectCountries = createSelector(selectAllUsers, (users) => {
  const list = users.filter(
    (elem, index, self) =>
      self.findIndex((t) => {
        return t.country === elem.country;
      }) === index
  );
  return list.sort((a, b) => a.country.localeCompare(b.country));
});

const filtrationRules: Record<filtrationKeys, any> = {
  name: {
    fn: (user: User, filterValue: string) => {
      return (
        user.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
        user.lastName.toLowerCase().includes(filterValue.toLowerCase())
      );
    },
    empty: "",
  },
  sex: {
    fn: (user: User, filterValue: string) => {
      return user.gender.toLowerCase() === filterValue;
    },
    empty: "",
  },
  country: {
    fn: (user: User, filterValue: string) => {
      return user.country === filterValue;
    },
    empty: "",
  },
};

const sortRules: Record<any, any> = {
  name: {
    fn: (a: User, b: User) => {
      const aFullName = a.firstName + "" + a.lastName;
      const bFullName = b.firstName + "" + b.lastName;
      if (aFullName < bFullName) {
        return 1;
      } else {
        return -1;
      }
    },
  },
  date: {
    fn: (a: User, b: User) => {
      if (a.dob < b.dob) {
        return 1;
      } else {
        return -1;
      }
    },
  },
};

function f(item: User, filters: IFilter, key: filtrationKeys) {
  if (filters[key] !== filtrationRules[key].empty) {
    return filtrationRules[key].fn(item, filters[key]);
  }
  return true;
}
