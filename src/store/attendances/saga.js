import { put, takeEvery, apply } from "redux-saga/effects";

import { ADD_ATTENDANCE_REQUEST, LIST_GROUP_ATTENDANCE_REQUEST } from "./actions";

import createApi from "../../api";

export default function* authSaga() {
  yield takeEvery(ADD_ATTENDANCE_REQUEST, addAttendance);
  yield takeEvery(LIST_GROUP_ATTENDANCE_REQUEST, listAttendances)
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

function* listAttendances(action) {
  const {groupId, date} = action.payload;
  const today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
  const tomorrow = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate()+1);

  const attendancesAdapter = createApi().attendances;
  const resultAction = yield apply(
    attendancesAdapter,
    attendancesAdapter.listAttendances,
    [groupId, today, tomorrow]
  );
  console.log('resultAction',resultAction)
  yield put(resultAction);
}
