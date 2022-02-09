import {
  LOGIN_API,
  LOGIN,
  LOGIN_CHECK,
  LOGOUT,
  LOGOUT_MIDDLE,
} from "./constant";

export interface LoginAPIType {
  type: typeof LOGIN_API;
  payload: LoginType;
}

export interface LoginType {
  id: string;
  password: string;
}

export interface AuthSuccess {
  type: typeof LOGIN;
  payload: UserInfo;
}

export interface UserInfo {
  token?: string;
  userId: string;
  isLogin: boolean;
}

export interface LoginCheckType {
  type: typeof LOGIN_CHECK;
  payload: string;
}

export interface LogoutType {
  type: typeof LOGOUT;
}

export interface LogoutMiddleType {
  type: typeof LOGOUT_MIDDLE;
}

export type LoginActionType = AuthSuccess | LogoutType;

// login axios
export const loginAPI = (userInfo: LoginType): LoginAPIType => {
  return {
    type: LOGIN_API,
    payload: userInfo,
  };
};

export const authSuccess = (loginInfo: AuthSuccess) => {
  return {
    type: LOGIN,
    payload: loginInfo,
  };
};

export const loginCheck = (token: string) => {
  return {
    type: LOGIN_CHECK,
    payload: token,
  };
};

export const logOut = (): LogoutType => {
  return {
    type: LOGOUT,
  };
};

export const logOutMiddle = (): LogoutMiddleType => {
  return {
    type: LOGOUT_MIDDLE,
  };
};
