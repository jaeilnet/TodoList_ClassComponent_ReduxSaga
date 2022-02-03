import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import { todoRootSaga } from "./saga";
import { todoReducer } from "./saga/reducer";

// 리듀서 /(사가x)
export const rootReducer = combineReducers({
  reducer: todoReducer,
});

// 사가함수 묶음
function* rootSaga() {
  yield all([todoRootSaga()]);
}

export default rootSaga;
