import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Store";

export interface taskType {
  pomoTask: object[];
}

const initialState: taskType = {
  pomoTask: [],
};

interface Task {
  text: string;
  no: number;
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addPomoTask: (state, action: PayloadAction<object>) => {
      state.pomoTask.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<{ index: number; task: Task }>) => {
      const { index, task } = action.payload;
      state.pomoTask[index] = task;
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      const index = action.payload;
      state.pomoTask = [...state.pomoTask.slice(0, index), ...state.pomoTask.slice(index + 1)];
    },
    clearTask: (state) => {
      state.pomoTask = [];
    },
  },
});

export const { addPomoTask,updateTask, deleteTask, clearTask } = taskSlice.actions;
export const selectPomoTask = (state: RootState) => state.taskSlice.pomoTask;

export default taskSlice.reducer;
