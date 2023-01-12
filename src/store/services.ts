import { IFilter } from "./slices/FiltersSlice";

export class UrlService {
  static readFromLocation() {
    const a = new URLSearchParams(window.location.search);
    let p = 1;
    try {
      p = a.get("page") ? parseInt(a.get("page")) : 1;
    } catch (e) {
      p = 1;
    }
    const result: IFilter = {
      page: p,
      name: a.get("name") || "",
      sex: a.get("sex") || "",
      country: a.get("country") || "",
      sortBy: a.get("sort") || "",
    };
    return result;
  }
  static recordLocation(filter: IFilter) {
    const a = new URLSearchParams();
    a.set("page", filter.page.toString());
    a.set("name", filter.name);
    a.set("sex", filter.sex);
    a.set("country", filter.country);
    a.set("sort", filter.sortBy);

    window.history.pushState(null, "", `?${a.toString()}`);
  }
}
