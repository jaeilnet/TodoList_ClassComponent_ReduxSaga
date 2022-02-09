import { takeLatest } from "redux-saga/effects";
import { loginCheckSaga, logoutSaga, postLoginAPISaga } from "../reducer";
import { LOGIN_API, LOGIN_CHECK, LOGOUT_MIDDLE } from "../constant";

export function* loginRootSaga() {
  yield takeLatest(LOGIN_API, postLoginAPISaga);
  yield takeLatest(LOGIN_CHECK, loginCheckSaga);
  yield takeLatest(LOGOUT_MIDDLE, logoutSaga);
}
