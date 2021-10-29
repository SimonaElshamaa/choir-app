import { all, fork } from "redux-saga/effects";

import AuthSaga from "./users/saga";
import AttendanceSaga from "./attendances/saga";
import GroupSaga from "./groups/saga";


export default function* rootSaga() {
  yield all([fork(AuthSaga), fork(AttendanceSaga), fork(GroupSaga)]);
}
