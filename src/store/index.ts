/**
 * https://redux-toolkit.js.org/tutorials/quick-start
 */

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import authReducer from "@/store/features/authSlice";

// redux-persist 설정
const persistConfig = {
    key: "root",
    version: 1,
    storage: storage,

    // redux-persist에 저장할 리듀서를 지정
    whitelist: [
        'authReducer'
    ]
}

// 리듀서 매핑
const rootReducer = combineReducers({
    authReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// store configure
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            // Redux Toolkit과 redux-persist를 함께 사용할 때 "A non-serializable value was detected in an action" 경고를 해결하기 위한 설정
            serializableCheck: {
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
            },
        }).concat(logger), // logger를 사용
    devTools: process.env.NODE_ENV !== "production", // 개발환경에만 devTools 사용
})

// @수정필요
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

/** useDispatch는 thunkAction에 대해서 타입에러를 발생시키므로 커스터 마이징해서 사용 */
export const useAppDispatch: () => AppDispatch = useDispatch;
/** useSelector를 사용할 경우, 매번 state의 타입을 지정해줘야 하기 때문에 커스터 마이징해서 사용 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const persistor = persistStore(store);
export default store