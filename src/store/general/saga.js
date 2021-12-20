import { takeEvery, take } from "redux-saga/effects";
import { FAILURE, SUCCESS, REQUEST, matchApiAction } from "./actionTypes";

export default function* watcher() {
  yield takeEvery("*", worker);
}

function* worker(action) {
    
  const { promise, resolve, reject, type } = action;

  if (promise) {
    const { requestName } = yield matchApiAction(type, [REQUEST]);

    const response = yield take([`${requestName}_${FAILURE}`, `${requestName}_${SUCCESS}`]);

    const isFailure = yield matchApiAction(response.type, [FAILURE]);

    if (isFailure) {
      yield reject(response.payload.error);
    } else {
      yield resolve(response.payload);
    }
  }
}
