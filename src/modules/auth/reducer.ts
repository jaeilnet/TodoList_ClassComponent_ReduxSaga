import { call, put } from "redux-saga/effects";
import { api } from "../../api";
import { history } from "../../App";
import {
  authSuccess,
  LoginActionType,
  LoginAPIType,
  LoginCheckType,
  logOut,
  UserInfo,
} from "./action";
import { LOGIN, LOGOUT } from "./constant";

interface authInitialStateType {
  loginInfo: UserInfo[];
}

const authInitialState: authInitialStateType = {
  loginInfo: [],
};

export const loginRecuer = (
  state = authInitialState,
  action: LoginActionType
) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loginInfo: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        loginInfo: {
          userId: "",
          isLogin: false,
        },
      };
    default:
      return state;
  }
};

export function* postLoginAPISaga(action: LoginAPIType) {
  const { id, password } = action.payload;
  try {
    const { data } = yield call(() => api.postLoginAPI(id, password));

    localStorage.setItem("isLogin", data.token);

    yield put(authSuccess(data));

    history.replace("/home");
  } catch (err) {
    console.log(err);
    // history.push("/login");
  }
}

export function* loginCheckSaga(action: LoginCheckType) {
  try {
    const { data } = yield call(() => api.loginCheckAPI(action.payload));

    yield put(authSuccess(data));
  } catch (err) {
    console.log(err);
  }
}

export function* logoutSaga() {
  try {
    yield put(logOut());

    localStorage.removeItem("isLogin");

    history.replace("/login");
  } catch (err) {
    console.log(err);
  }
}
