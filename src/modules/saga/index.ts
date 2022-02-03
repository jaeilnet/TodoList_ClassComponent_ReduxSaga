import { takeEvery } from "redux-saga/effects";
import { ADD_TODO } from "../constants";
import { todoSaga } from "./reducer";

export function* todoRootSaga() {
  yield takeEvery(ADD_TODO, todoSaga);
}
