import { put, takeEvery, apply } from "redux-saga/effects";

import { ADD_ATTENDANCE_REQUEST } from "./actions";

import createApi from "../../api";

export default function* authSaga() {
  yield takeEvery(ADD_ATTENDANCE_REQUEST, addAttendance);
}

function* addAttendance(action) {
  const {attendance} = action.payload;

  const attendancesAdapter = createApi().attendances;
  const resultAction = yield apply(
    attendancesAdapter,
    attendancesAdapter.addAttendance,
    [attendance]
  );
  yield put(resultAction);
}
