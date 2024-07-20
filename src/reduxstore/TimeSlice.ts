import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Store";

export interface TimeState {
  pomodoroTime: number;
  shortBreak: number;
  longBreak: number;
}

const initialState: TimeState = {
  pomodoroTime: 25,
  shortBreak: 5,
  longBreak: 15,
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setPomodoro: (state, action: PayloadAction<number>) => {
      state.pomodoroTime = action.payload;
    },
    setShortBreak: (state, action: PayloadAction<number>) => {
      state.shortBreak = action.payload;
    },
    setLongBreak: (state, action: PayloadAction<number>) => {
      state.longBreak = action.payload;
    },
  },
});

export const { setPomodoro,setShortBreak,setLongBreak } = timeSlice.actions;
export const selectPomodoroTime = (state: RootState) => state.time.pomodoroTime;
export const selectShortBreak = (state: RootState) => state.time.shortBreak;
export const selectLongBreak = (state: RootState) => state.time.longBreak;
export default timeSlice.reducer;
