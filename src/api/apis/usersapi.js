import authHeader from "../helpers/authHeader";

export default class UsersApi {
  constructor(driver) {
    this.driver = driver;
    this.storesPrefix = "/users";
  }

  login(email, password) {
    return this.driver.post(this.storesPrefix + "/auth", {
      email,
      password,
    });
  }

  logout() {
    return this.driver.post(this.storesPrefix + "/logout", {}, authHeader());
  }

  listUsers(groupId) {
    return this.driver.get(
      this.storesPrefix + "/get_group_users",
      {
        group_id: groupId,
      },
      authHeader()
    );
  }

  addUser(user) {
    console.log("inApi", user);
    return this.driver.post(
      this.storesPrefix + "/add_user",
      user,
      authHeader()
    );
  }

  search(name, groupId) {
    return this.driver.get(
      this.storesPrefix + "/search",
      {
        name,
        group_id: groupId,
      },
      authHeader()
    );
  }
}
