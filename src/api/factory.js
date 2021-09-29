import UsersAdapter from "./adapters/UsersAdapter";
import GroupsAdapter from "./adapters/GroupsAdapter";
import AttendancesAdapter from "./adapters/AttendancesAdapter";

export default (driver) => {
  return {
    users: new UsersAdapter(driver),
    groups: new GroupsAdapter(driver),
    attendances: new AttendancesAdapter(driver),
  };
};
