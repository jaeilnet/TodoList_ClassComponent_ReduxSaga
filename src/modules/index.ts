import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { todoRootSaga } from "./saga";
import { TodoResType, todoReducer } from "./saga/reducer";

export interface RootSaga {
  todo: {
    todoList: TodoResType[];
  };
}

// 리듀서 /(사가x)
export const rootReducer = combineReducers({
  todo: todoReducer,
});

// 사가함수 묶음
function* rootSaga() {
  yield all([todoRootSaga()]);
}

export default rootSaga;
