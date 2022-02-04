import { takeLatest } from "redux-saga/effects";
import { DELETE_TODO, GET_TODO, POST_TODO } from "../constants";
import { deleteTodoAPISaga, getTodoAPISaga, postTodoAPISaga } from "./reducer";

export function* todoRootSaga() {
  // 타입 , 사가함수
  yield takeLatest(GET_TODO, getTodoAPISaga);
  yield takeLatest(POST_TODO, postTodoAPISaga);
  yield takeLatest(DELETE_TODO, deleteTodoAPISaga);
}
