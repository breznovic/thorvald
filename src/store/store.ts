import { configureStore } from "@reduxjs/toolkit";
import fightReducer from "../features/fightSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    fight: fightReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
