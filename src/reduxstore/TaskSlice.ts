import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Store";

export interface taskType {
  pomoTask: object[];
}

const initialState: taskType = {
  pomoTask: [],
};

export interface Task {
  text: string;
  setTaskNo : number;
}

interface updateTask extends Task{
  completedTaskNo ?: number;
}

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addPomoTask: (state, action: PayloadAction<Task>) => {
      state.pomoTask.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<{ index: number; task: updateTask }>) => {
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
export const selectPomoTaskFirst = (state: RootState) => state.taskSlice.pomoTask[0];
export default taskSlice.reducer;
