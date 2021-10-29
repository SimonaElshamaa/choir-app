import authHeader from "../helpers/authHeader";

export default class GroupsApi {
  constructor(driver) {
    this.driver = driver;
    this.groupsPrefix = "/attendances";
  }

  add_attendance(attendance) {
    return this.driver.post(
      this.groupsPrefix + "/add_attendance",
      attendance,
      authHeader()
    );
  }

  get_attendances(groupId, today, tomorrow) {
    return this.driver.get(
      `${this.groupsPrefix}/get_group_attendance_by_date/${groupId}/${today}/${tomorrow}`,
      {},
      authHeader()
    );
  }
}
