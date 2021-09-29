import authHeader from "../helpers/authHeader";

export default class GroupsApi {
  constructor(driver) {
    this.driver = driver;
    this.groupsPrefix = "/attendances";
  }

  add_attendance(date, user_id, group_id, attend, note) {
    return this.driver.post(
      this.groupsPrefix + "/add_attendance",
      {
        date,
        user_id,
        group_id,
        attend,
        note,
      },
      authHeader()
    );
  }

  get_attendances(date, group_id) {
    return this.driver.get(
      this.groupsPrefix + "/add_group",
      {
        date,
        group_id,
      },
      authHeader()
    );
  }
}
