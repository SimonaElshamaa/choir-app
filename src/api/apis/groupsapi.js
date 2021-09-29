import authHeader from "../helpers/authHeader";

export default class GroupsApi {
  constructor(driver) {
    this.driver = driver;
    this.groupsPrefix = "/groups";
  }

  get_groups() {
    return this.driver.get(this.groupsPrefix + "/get_groups", {}, authHeader());
  }

  add_group(name) {
    return this.driver.post(
      this.groupsPrefix + "/add_group",
      { name },
      authHeader()
    );
  }
}
