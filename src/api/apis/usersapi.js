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
      this.storesPrefix + `/get_group_users/${groupId}`,
      {
        groupId,
      },
      authHeader()
    );
  }

  addUser(user) {
    return this.driver.post(
      this.storesPrefix + "/add_user",
      user,
      authHeader()
    );
  }

  registerUser(user) {
    return this.driver.post(
      this.storesPrefix + "/register",
      user,
      authHeader()
    );
  }

  search(name, groupId) {
    return this.driver.get(
      `${this.storesPrefix}/search/${name}/${groupId}`,
      authHeader()
    );
  }


  getMe(id) {
    return this.driver.get(
      `${this.storesPrefix}/get_me/${id}`,
      authHeader()
    );
  }
}
