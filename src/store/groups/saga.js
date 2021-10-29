import { put, takeEvery, apply } from "redux-saga/effects";

import { LIST_GROUPS_REQUEST } from "./actions";

import createApi from "../../api";

export default function* authSaga() {
  yield takeEvery(LIST_GROUPS_REQUEST, listGroups);
}

function* listGroups() {
  const groupsAdapter = createApi().groups;
  const resultAction = yield apply(groupsAdapter, groupsAdapter.listGroups);
  yield put(resultAction);
}
