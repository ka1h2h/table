import { IFilter } from "./FiltersSlice";
import api from "./../../api.json";

export class User {
  constructor() {}
  public avatar: string;
  public firstName: string;
  public lastName: string;
  public gender: string;
  public country: string;
  public dob: string;
  public email: string;
  public phone: string;
}

export class UsersAPI {
  static getUsersList() {
    return api.results.map((i) => {
      const user: User = new User();
      (user.avatar = i.picture.medium), (user.firstName = i.name.first);
      user.lastName = i.name.last;
      user.gender = i.gender;
      user.country = i.location.country;
      user.dob = i.dob.date;
      user.email = i.email;
      user.phone = i.phone;
      return user;
    });
  }
}

export class UrlService {
  static readFromLocation() {
    const a = new URLSearchParams(window.location.search);
    const result: IFilter = {
      name: a.get("name") || "",
      sex: a.get("sex") || "",
      country: a.get("country") || "",
    };
    return result;
  }
  static recordLocation(filter: IFilter) {
    const a = new URLSearchParams();
    a.set("name", filter.name);
    a.set("sex", filter.sex);
    a.set("country", filter.country);
    window.history.pushState(null, "", `?${a.toString()}`);
  }
}
