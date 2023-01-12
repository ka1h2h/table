import api from "./../../api.json";

export class User {
  constructor() {}
  public avatar: string;
  public firstName: string;
  public lastName: string;
  public gender: string;
  public country: string;
  public dob: Date;
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
      user.dob = new Date(i.dob.date);
      user.email = i.email;
      user.phone = i.phone;
      return user;
    });
  }
}
