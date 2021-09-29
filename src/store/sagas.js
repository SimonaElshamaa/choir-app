import { all, fork } from "redux-saga/effects";

import AuthSaga from "./users/saga";

export default function* rootSaga() {
  yield all([fork(AuthSaga)]);
}
