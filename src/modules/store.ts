import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga, { rootReducer } from "./rootSaga";

const sagaMiddleWare = createSagaMiddleware();

const create = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

// 사가 실행
sagaMiddleWare.run(rootSaga);

export default create;
