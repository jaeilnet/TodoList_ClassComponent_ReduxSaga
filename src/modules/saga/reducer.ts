import { call, put } from "redux-saga/effects";
import { api } from "../../api";
import {
  deleteTodo,
  getList,
  postFail,
  postSuccess,
  postTodo,
} from "../actions";
import { DELETE_TODO, GET_LIST, POST_SUCCESS } from "../constants";

export interface TodoResType {
  id: number;
  contents: string;
}
interface InitialState {
  todoList: TodoResType[];
}

const initialState: InitialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, action: any) => {
  console.log(action);
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        todoList: action.payload,
      };
    case POST_SUCCESS:
      return {
        ...state,
        todoList: state.todoList.concat(action.payload),
      };
    case DELETE_TODO:
      return {
        ...state,
      };
    // case DELETE_TODO:
    //   return {};
    default:
      return initialState;
  }
};

console.log(initialState, "qweqeqew");

// 데이터 담을 사가
export function* getTodoAPISaga() {
  try {
    // api호출
    const { data } = yield call(api.getApis);

    // api 담기
    yield put(getList(data));
  } catch (err) {
    console.log(err, "err");
  }
}

export function* postTodoAPISaga() {
  try {
    // post api 호출
    const { data } = yield call(api.postApi);

    yield put(postSuccess(data));
  } catch (err) {
    yield put(postFail(new Error()));
  }
}

export function* deleteTodoAPISaga() {
  try {
    const { data } = yield call(() => api.deleteApi(1));

    yield put(deleteTodo(data));
  } catch (err) {}
}
