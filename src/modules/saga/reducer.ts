import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { addTodo, AddTodoType } from "../actions";
import { ADD_TODO } from "../constants";

interface InitialState {
  todoList: string[];
}

const initialState: InitialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: state.todoList.concat(action.payload),
      };
    // case DELETE_TODO:
    //   return {};
    default:
      return initialState;
  }
};

const baseUrl = "http://0.0.0.0:9002/api/v2";

export function* mockApiTest() {
  yield put({ type: "ADD_TODO" });
}

// ????
const apis = () => {
  return axios.get(`${baseUrl}/peatio/market/trades`);
};

const api = {
  apis,
};

export function* todoSaga() {
  try {
    // mock api test
    // const apiTEst = axios.get(`${baseUrl}/peatio/market/trades`);
    // const { data } = yield call(api.apis);
    // console.log(data);
    // apiTEst.then((res) => console.log(res));
    // yield put(());
    // yield put(addTodo);
  } catch (err) {
    console.log(err);
  }
}
