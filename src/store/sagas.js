import { all, fork } from "redux-saga/effects";

import AuthSaga from "./users/saga";
import AttendanceSaga from "./attendances/saga";
import GeneralSaga from "./general/saga";
import GroupSaga from "./groups/saga";


export default function* rootSaga() {
  yield all([GeneralSaga(),fork(AuthSaga), fork(AttendanceSaga), fork(GroupSaga)]);
}
