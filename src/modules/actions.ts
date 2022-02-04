import {
  DELETE_TODO,
  GET_LIST,
  GET_TODO,
  POST_FAIL,
  POST_SUCCESS,
  POST_TODO,
} from "./constants";
import { TodoResType } from "./saga/reducer";

// 액션함수 타입
export interface GetListType {
  type: typeof GET_LIST;
  payload?: TodoResType[];
}

export interface GetTodoAPI {
  type: typeof GET_TODO;
}

export interface PostTodoAPI {
  type: typeof POST_TODO;
}

export interface PostSuccess {
  type: typeof POST_SUCCESS;
  payload?: TodoResType[];
}

export interface PostFail {
  type: typeof POST_FAIL;
}

export interface DeleteAPI {
  type: typeof DELETE_TODO;
  payload: number;
}

// 액션함수
export const getList = (payload: TodoResType[]): GetListType => {
  return {
    type: GET_LIST,
    payload,
  };
};

export const getTOdo = (): GetTodoAPI => {
  return {
    type: GET_TODO,
  };
};

export const postTodo = (): PostTodoAPI => {
  return {
    type: POST_TODO,
  };
};

export const postSuccess = (payload: TodoResType[]): PostSuccess => {
  return {
    type: POST_SUCCESS,
    payload,
  };
};

export const postFail = (err: unknown): PostFail => {
  return {
    type: POST_FAIL,
  };
};

export const deleteTodo = (id: number): DeleteAPI => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
