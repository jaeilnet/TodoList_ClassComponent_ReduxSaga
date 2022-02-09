사가 폴더구조

```
modules = [{
  auth : {
    saga : {
        index.ts : auth에 대한 RootSaga
    },
    action.ts : 액션함수 + @type
    constatns.ts : 액션타입 + @type
    reducer.ts : 리듀서 + 사가함수
   },
  },
  index.ts : rootSaga
  store.ts : store
]
```

## **루트사가 rootSaga.ts** (modules > index.ts)

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

## **authRootSaga** (modules > auth > saga > index.ts)

```js
export function* todoRootSaga() {
  yield takeLatest(액션타입, 사가함수);
}
```

사가 구조

리듀서 함수들을 combined 으로 묶어주고 사가 함수들은 rootSaga 로 묶는다.
