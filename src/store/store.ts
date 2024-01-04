import { configureStore } from "@reduxjs/toolkit";
import fightReducer from "../features/fightSlice";
import thorvaldReducer from "../features/thorvaldSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    fight: fightReducer,
    thorvald: thorvaldReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
