import { message } from "antd";
import { call, put } from "redux-saga/effects";
import { api } from "../../api";
import {
  DeleteAPI,
  fetchFail,
  fetchSuccess,
  PatchStatusAPI,
  PatchTextAPI,
  TodoActionType,
} from "./actions";
import { FETCH_FAIL, FETCH_SUCCESS } from "./constants";

export interface TodoDataType {
  id: number;
  contents: string;
  status: boolean;
}

interface InitialState {
  todoList: TodoDataType[];
}

const todoIntialState: InitialState = {
  todoList: [],
};

export const todoReducer = (
  state = todoIntialState,
  action: TodoActionType
) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        todoList: action.payload,
      };
    case FETCH_FAIL:
      return {
        ...state,
        // todoList: action.payload,
      };
    default:
      return state;
  }
};

// get todoAPI
export function* getTodoAPISaga() {
  try {
    const { data } = yield call(api.getApi);

    yield put(fetchSuccess(data));
  } catch (err) {
    console.log(err, "err");
  }
}

// post todoAPI
export function* postTodoAPISaga() {
  try {
    // post api 호출
    const { data } = yield call(api.postApi);

    yield put(fetchSuccess(data));
  } catch (err) {
    yield put(fetchFail());
  }
}

// delete Api
export function* deleteTodoAPISaga(action: DeleteAPI) {
  try {
    const { data } = yield call(() => api.deleteApi(action.payload));

    yield put(fetchSuccess(data));
  } catch (err) {
    console.log(err);
  }
}
// patch status APi
export function* pathTodoEditStatusAPISaga(action: PatchStatusAPI) {
  try {
    const { data } = yield call(() => api.patchStatusApi(action.payload));

    yield put(fetchSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

export function* patchTodoEditTextAPISaga(action: PatchTextAPI) {
  const { id, contents } = action.payload;
  try {
    const { data } = yield call(() => api.patchTextAPI(id, contents));

    yield put(fetchSuccess(data));
  } catch (err) {
    // 에러시 메인으로 가기
    new Error(message as any);
    message.error("err");
  }
}
