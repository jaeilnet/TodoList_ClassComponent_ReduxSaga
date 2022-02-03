import { ADD_TODO, LOAD_TODOLIST } from "./constants";

// 액션함수 타입
export interface AddTodoType {
  type: typeof ADD_TODO;
}

export interface LoadTodoType {
  type: typeof LOAD_TODOLIST;
  payload?: any;
}

// 액션함수
export const addTodo = (): AddTodoType => {
  return {
    type: ADD_TODO,
  };
};

export const LoadTodo = (): LoadTodoType => {
  return {
    type: LOAD_TODOLIST,
    // payload:
  };
};
