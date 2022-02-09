import { combineReducers } from "redux";
import { all, call } from "redux-saga/effects";
import { todoRootSaga } from "./todo/saga";
import { TodoDataType, todoReducer } from "./todo/reducer";
import { loginRootSaga } from "./auth/saga";
import { loginRecuer } from "./auth/reducer";
import { UserInfo } from "./auth/action";

export interface RootSaga {
  todo: {
    todoList: TodoDataType[];
  };
  login: {
    loginInfo: UserInfo;
  };
}

// 리듀서 /(사가x)
export const rootReducer = combineReducers({
  todo: todoReducer,
  login: loginRecuer,
});

// 사가함수 묶음
function* rootSaga() {
  yield all([call(todoRootSaga), call(loginRootSaga)]);
}

export default rootSaga;
