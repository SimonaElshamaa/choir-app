import { put, takeEvery, apply } from "redux-saga/effects";

import {
  LOGIN_USER_REQUEST,
  LOGIN_USER_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_FAILURE,
  loginUserSuccess,
  loginUserFailure,
  logoutUserSuccess,
  LIST_USERS_REQUEST,
  ADD_USER_REQUEST,
  SEARCH_REQUEST,
} from "./actions";

import createApi from "../../api";

export default function* authSaga() {
  yield takeEvery(LOGIN_USER_REQUEST, loginUser);
  yield takeEvery(LOGOUT_USER_REQUEST, logoutUser);
  yield takeEvery(LIST_USERS_REQUEST, listUsers);
  yield takeEvery(ADD_USER_REQUEST, addUser);
  yield takeEvery(SEARCH_REQUEST, search);
}

function* loginUser({ payload: { credentials, history } }) {
  const usersAdapter = createApi().users;
  const resultAction = yield apply(usersAdapter, usersAdapter.login, [
    credentials.email,
    credentials.password,
  ]);

  if (resultAction.type === LOGIN_USER_FAILURE) {
    yield put(loginUserFailure(resultAction.payload.error));
    return;
  }

  localStorage.setItem("login", JSON.stringify(resultAction.payload));

  yield put(loginUserSuccess(resultAction.payload.token));

  history.push("/dashboard");
}

function* logoutUser({ payload: { history } }) {
  const usersAdapter = createApi().users;
  const resultAction = yield apply(usersAdapter, usersAdapter.logout, []);

  if (resultAction.type === LOGOUT_USER_FAILURE) {
    return;
  }

  localStorage.removeItem("login");

  yield put(logoutUserSuccess(resultAction.payload));

  history.push("/login");
}

function* listUsers({payload}) {
  const usersAdapter = createApi().users;
  const resultAction = yield apply(usersAdapter, usersAdapter.listUsers, [payload.groupId]);
  yield put(resultAction);
}

function* addUser({ payload: { user } }) {
  const usersAdapter = createApi().users;
  const resultAction = yield apply(usersAdapter, usersAdapter.addUser, [user]);
  console.log(resultAction);
  yield put(resultAction);
}

function* search({ payload: { name, groupId } }) {
  const usersAdapter = createApi().users;
  const resultAction = yield apply(usersAdapter, usersAdapter.addUser, [
    name,
    groupId,
  ]);
  yield put(resultAction);
}
