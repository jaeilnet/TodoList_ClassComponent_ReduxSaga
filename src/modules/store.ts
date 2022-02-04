import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga, { rootReducer } from ".";

const sagaMiddleWare = createSagaMiddleware();

const create = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleWare))
);

// 사가 실행
sagaMiddleWare.run(rootSaga);

export default create;
