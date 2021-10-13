import UsersApi from "../apis/usersapi";
import UsersMapper from "../mappers/users";

import {
  loginUserSuccess,
  loginUserFailure,
  logoutUserSuccess,
  logoutUserFailure,
  listUsersSuccess,
  listUsersFailure,
  addUserSuccess,
  addUserFailure,
  searchFailure,
  searchSuccess,
} from "../../store/users/actions";

import ErrorsMapper from "../mappers/errors";

import { handleFailure } from "../handlers/failure";
import HTTPCodeException from "../handlers/HTTPCodeException";

export default class UsersAdapter {
  constructor(driver) {
    this.usersApi = new UsersApi(driver);
  }

  login(email, password) {
    return new Promise((resolve) => {
      this.usersApi
        .login(email, password)
        .then(([status, body]) => {
          switch (status) {
            case 200: {
              resolve(loginUserSuccess(body.data.Authorization));
              return;
            }
            default:
              throw new HTTPCodeException({
                status,
                body: ErrorsMapper.fromAPI(body),
              });
          }
        })
        .catch(handleFailure(resolve, loginUserFailure));
    });
  }

  logout() {
    return new Promise((resolve) => {
      this.usersApi
        .logout()
        .then(([status, body]) => {
          switch (status) {
            case 204:
              resolve(logoutUserSuccess());
              return;
            default:
              throw new HTTPCodeException({
                status,
                body: ErrorsMapper.fromAPI(body),
              });
          }
        })
        .catch(handleFailure(resolve, logoutUserFailure));
    });
  }

  listUsers(groupId) {
    return new Promise((resolve) => {
      this.usersApi
        .listUsers(groupId)
        .then(([status, body]) => {
          switch (status) {
            case 204: {
              const { users } = UsersMapper.fromAPIList(body.data);
              resolve(listUsersSuccess(users));
              return;
            }
            default:
              throw new HTTPCodeException({
                status,
                body: ErrorsMapper.fromAPI(body),
              });
          }
        })
        .catch(handleFailure(resolve, listUsersFailure));
    });
  }

  addUser(user) {
    return new Promise((resolve) => {
      this.usersApi
        .addUser(user)
        .then(([status, body]) => {
          switch (status) {
            case 204: {
              const { user } = UsersMapper.fromAPI(body.data);
              resolve(addUserSuccess(user));
              return;
            }
            default:
              throw new HTTPCodeException({
                status,
                body: ErrorsMapper.fromAPI(body),
              });
          }
        })
        .catch(handleFailure(resolve, addUserFailure));
    });
}

  search(name, groupId) {
    return new Promise((resolve) => {
      this.usersApi
        .search(name, groupId)
        .then(([status, body]) => {
          switch (status) {
            case 204: {
              const { users } = UsersMapper.fromAPIList(body);
              resolve(searchSuccess(users));
              return;
            }
            default:
              throw new HTTPCodeException({
                status,
                body: ErrorsMapper.fromAPI(body),
              });
          }
        })
        .catch(handleFailure(resolve, searchFailure));
    });
  }
}
