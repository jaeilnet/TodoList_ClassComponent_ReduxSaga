폴더구조

액션타입 constatns.ts
액션함수 actions.ts

## 루트사가 rootSaga.ts

```js
// 리듀서 /(사가x)
export const rootReducer = combineReducers({
  reducer: todoReducer,
});

// 사가함수 묶음 (지금은 1개뿐)
function* rootSaga() {
  yield all([todoRootSaga()]);
}

export default rootSaga;
```

## index.ts

```js
// 액션과 saga를 묶어준다.

export function* todoRootSaga() {
  yield takeEvery(GET_LIST, todoSaga);
}
```

사가 구조

액션타입 정의

컴포넌트에서 ADDTODO 가 담긴 aciton(addTodo())을 디스패치하면 그와 연결된 사가 todoSaga가 실행이 되고
그 안에서는 api 호출을 해서 data를 state에 담을 actino을 정의해서 data를 담아주면 된다.
