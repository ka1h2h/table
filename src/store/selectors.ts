import { IFilter } from "./FiltersSlice";
import { RootState } from "./index";
import { createSelector } from "reselect";
import { User } from "./classes";

const selectAllUsers = (state: RootState) => state.users.allUsers;
const selectFilters = (state: RootState) => state.filters.filter;

export const selectFiltratedUsers = createSelector(
  selectAllUsers,
  selectFilters,
  (users, filters) => {
    let start = 1 || filters.page === 1 ? 0 : filters.page * 10;
    let end = start + 20;

    return users
      .filter((item) => {
        if (
          f(item, filters, "name") &&
          f(item, filters, "sex") &&
          f(item, filters, "country")
        ) {
          return true;
        }
      })
      .slice(0, 20);
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

const filtrationRules: Record<keyof IFilter, any> = {
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
  page: "",
};

function f(item: User, filters: IFilter, key: keyof IFilter) {
  if (filters[key] !== filtrationRules[key].empty) {
    return filtrationRules[key].fn(item, filters[key]);
  }
  return true;
}
