import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import diaryReducer from "./slices/diarySlice";

export const store = configureStore({
    reducer: {
        diary: diaryReducer,
    },
    devTools: process.env.REACT_APP_ENV !== "production",
    middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
