import {
  LOGIN_USER,
  LOGOUT_USER,
  LIST_USERS,
  ADD_USER,
  SEARCH,
  getActionType,
  REQUEST,
  SUCCESS,
  FAILURE,
} from "./actionTypes";

/*
 *  action types
 */
export const LOGIN_USER_REQUEST = getActionType(LOGIN_USER, REQUEST);
export const LOGIN_USER_SUCCESS = getActionType(LOGIN_USER, SUCCESS);
export const LOGIN_USER_FAILURE = getActionType(LOGIN_USER, FAILURE);

export const LOGOUT_USER_REQUEST = getActionType(LOGOUT_USER, REQUEST);
export const LOGOUT_USER_SUCCESS = getActionType(LOGOUT_USER, SUCCESS);
export const LOGOUT_USER_FAILURE = getActionType(LOGOUT_USER, FAILURE);

export const LIST_USERS_REQUEST = getActionType(LIST_USERS, REQUEST);
export const LIST_USERS_SUCCESS = getActionType(LIST_USERS, SUCCESS);
export const LIST_USERS_FAILURE = getActionType(LIST_USERS, FAILURE);

export const ADD_USER_REQUEST = getActionType(ADD_USER, REQUEST);
export const ADD_USER_SUCCESS = getActionType(ADD_USER, SUCCESS);
export const ADD_USER_FAILURE = getActionType(ADD_USER, FAILURE);

export const SEARCH_REQUEST = getActionType(SEARCH, REQUEST);
export const SEARCH_SUCCESS = getActionType(SEARCH, SUCCESS);
export const SEARCH_FAILURE = getActionType(SEARCH, FAILURE);

export const loginUser = (credentials, history) => {
  return {
    type: LOGIN_USER_REQUEST,
    payload: { credentials, history },
  };
};

export const loginUserSuccess = (token = "") => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: { loginType: "store", token },
  };
};

export function loginUserFailure(error = null) {
  return {
    type: LOGIN_USER_FAILURE,
    payload: { error },
  };
}

export function logoutUser(history) {
  return {
    type: LOGOUT_USER_REQUEST,
    payload: { history },
  };
}

export function logoutUserSuccess() {
  return {
    type: LOGOUT_USER_SUCCESS,
  };
}

export function logoutUserFailure(error = null) {
  return {
    type: LOGOUT_USER_FAILURE,
    payload: { error },
  };
}

export function listUsers(groupId = null) {
  return {
    type: LIST_USERS_REQUEST,
    payload: { groupId },
  };
}

export function listUsersSuccess(users = []) {
  return {
    type: LIST_USERS_SUCCESS,
    payload: { users },
  };
}

export function listUsersFailure(error = null) {
  return {
    type: LIST_USERS_FAILURE,
    payload: { error },
  };
}

export function addUser(user = {}) {
  return {
    type: ADD_USER_REQUEST,
    payload: { user },
  };
}

export function addUserSuccess(user = {}) {
  return {
    type: ADD_USER_SUCCESS,
    payload: { user },
  };
}

export function addUserFailure(error = null) {
  return {
    type: ADD_USER_FAILURE,
    payload: { error },
  };
}

export function search(name = null, groupId = null) {
  return {
    type: SEARCH_REQUEST,
    payload: { name, groupId },
  };
}

export function searchSuccess(users = []) {
  return {
    type: SEARCH_SUCCESS,
    payload: { users },
  };
}

export function searchFailure(error = null) {
  return {
    type: SEARCH_FAILURE,
    payload: { error },
  };
}
