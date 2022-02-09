import {
  GET_TODO_API,
  FETCH_SUCCESS,
  POST_TODO_API,
  DELETE_TODO_API,
  PATCH_TODO_STATUS_API,
  PATCH_TODO_TEXT_API,
  FETCH_FAIL,
} from "./constants";
import { TodoDataType } from "./reducer";

// 액션함수 타입

export interface FetchSuccess {
  type: typeof FETCH_SUCCESS;
  payload: TodoDataType[];
}

export interface FetchFail {
  type: typeof FETCH_FAIL;
}
export interface GetTodoAPI {
  type: typeof GET_TODO_API;
}

export interface PostTodoAPI {
  type: typeof POST_TODO_API;
  payload: string;
}
export interface DeleteAPI {
  type: typeof DELETE_TODO_API;
  payload: number;
}

export interface PatchStatusAPI {
  type: typeof PATCH_TODO_STATUS_API;
  payload: number;
}

export interface PatchTextAPI {
  type: typeof PATCH_TODO_TEXT_API;
  payload: TodoDataType;
}

export type TodoActionType = FetchSuccess | FetchFail;

// 액션함수

// todolist suceess state 저장
export const fetchSuccess = (payload: TodoDataType[]): FetchSuccess => {
  return {
    type: FETCH_SUCCESS,
    payload,
  };
};

// todolist fail

export const fetchFail = () => {
  return {
    type: FETCH_FAIL,
  };
};

// todolist get api
export const getTodoAPI = (): GetTodoAPI => {
  return {
    type: GET_TODO_API,
  };
};

// todolist post api
export const postTodoAPI = (payload: string): PostTodoAPI => {
  return {
    type: POST_TODO_API,
    payload,
  };
};

// todolist delete api
export const deleteTodo = (id: number): DeleteAPI => {
  return {
    type: DELETE_TODO_API,
    payload: id,
  };
};

// todolist patch api
export const patchTodoStatus = (id: number): PatchStatusAPI => {
  return {
    type: PATCH_TODO_STATUS_API,
    payload: id,
  };
};

export const patchTodoText = (edit: {
  id: number;
  status: boolean;
  contents: string;
}): PatchTextAPI => {
  return {
    type: PATCH_TODO_TEXT_API,
    payload: edit,
  };
};
