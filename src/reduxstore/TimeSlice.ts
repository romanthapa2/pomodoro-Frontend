import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TimeState {
  pomodoroTime: number | null;
  shortBreak: number | null;
  longBreak: number | null;
}

const initalstate: TimeState = {
  pomodoroTime: 25,
  shortBreak: 5,
  longBreak: 15,
};

const timeSlice = createSlice({
  name: "time",
  initialState: initalstate,
  reducers: {
    setpomodoroTime: (state, action: PayloadAction<number>) => {
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

export const { setpomodoroTime,setShortBreak,setLongBreak } = timeSlice.actions;
export default timeSlice.reducer;
