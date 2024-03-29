import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cryptsReducer from "./crypts";
import { TypedUseSelectorHook, useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const rootReducer = combineReducers({
  crypts: cryptsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof rootReducer>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
