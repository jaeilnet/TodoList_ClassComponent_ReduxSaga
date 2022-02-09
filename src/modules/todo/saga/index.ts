import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  DELETE_TODO_API,
  GET_TODO_API,
  POST_TODO_API,
  PATCH_TODO_STATUS_API,
  PATCH_TODO_TEXT_API,
} from "../constants";
import {
  deleteTodoAPISaga,
  getTodoAPISaga,
  patchTodoEditTextAPISaga,
  pathTodoEditStatusAPISaga,
  postTodoAPISaga,
} from "../reducer";

export function* todoRootSaga() {
  // 타입 , 사가함수
  yield takeLatest(GET_TODO_API, getTodoAPISaga);
  yield takeLatest(POST_TODO_API, postTodoAPISaga);
  yield takeLatest(DELETE_TODO_API, deleteTodoAPISaga);
  yield takeLatest(PATCH_TODO_STATUS_API, pathTodoEditStatusAPISaga);
  yield takeLatest(PATCH_TODO_TEXT_API, patchTodoEditTextAPISaga);
}
