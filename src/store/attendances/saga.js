import { put, takeEvery, apply } from "redux-saga/effects";

import { ADD_ATTENDANCE_REQUEST } from "./actions";

import createApi from "../../api";

export default function* authSaga() {
  yield takeEvery(ADD_ATTENDANCE_REQUEST, addAttendance);
}

function* addAttendance() {
  // eslint-disable-next-line prettier/prettier
  console.log('resultttt');
  const attendancesAdapter = createApi().attendances;
  const resultAction = yield apply(
    attendancesAdapter,
    attendancesAdapter.addAttendance
  );
  yield put(resultAction);
}
