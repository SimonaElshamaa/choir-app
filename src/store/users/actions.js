import {
  LOGIN_USER,
  LOGOUT_USER,
  LIST_USERS,
  ADD_USER,
  SEARCH,
  REGISTER_USER,
  getActionType,
  GET_ME,
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

export const REGISTER_USER_REQUEST = getActionType(REGISTER_USER, REQUEST);
export const REGISTER_USER_SUCCESS = getActionType(REGISTER_USER, SUCCESS);
export const REGISTER_USER_FAILURE = getActionType(REGISTER_USER, FAILURE);

export const SEARCH_REQUEST = getActionType(SEARCH, REQUEST);
export const SEARCH_SUCCESS = getActionType(SEARCH, SUCCESS);
export const SEARCH_FAILURE = getActionType(SEARCH, FAILURE);

export const GET_ME_REQUEST = getActionType(GET_ME, REQUEST);
export const GET_ME_SUCCESS = getActionType(GET_ME, SUCCESS);
export const GET_ME_FAILURE = getActionType(GET_ME, FAILURE);

export const loginUser = (credentials, history) => {
  return {
    type: LOGIN_USER_REQUEST,
    payload: { credentials, history },
  };
};

export const loginUserSuccess = (token = "", user = {}, loginType = "servent") => {

  return {
    type: LOGIN_USER_SUCCESS,
    payload: { loginType, token, user },
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

export function registerUser(user = {}) {
  return {
    type: REGISTER_USER_REQUEST,
    payload: { user },
  };
}

export function registerUserSuccess(user = {}) {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: { user },
  };
}

export function registerUserFailure(error = null) {
  return {
    type: REGISTER_USER_FAILURE,
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

export function getMe() {
  return {
    type: GET_ME_REQUEST
  };
}

export function getMeSuccess(user = {}) {
  return {
    type: GET_ME_SUCCESS,
    payload: { user },
  };
}

export function getMeFailure(error = null) {
  return {
    type: GET_ME_FAILURE,
    payload: { error },
  };
}