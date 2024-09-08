import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Store";

export interface taskType {
  pomoTask: object[];
  selectedTaskIndex: number | null;
}

const initialState: taskType = {
  pomoTask: [],
  selectedTaskIndex: null,
};

export interface Task {
  text: string;
  setTaskNo : number;
  completedTaskNo : number;
}

// interface updateTask extends Task{

// }

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addPomoTask: (state, action: PayloadAction<Task>) => {
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
      state.selectedTaskIndex = null;
    },
    selectTask: (state, action: PayloadAction<number>) => {
      state.selectedTaskIndex = action.payload;
    },
  },
});

export const { addPomoTask,updateTask, deleteTask, clearTask,selectTask } = taskSlice.actions;
export const selectPomoTask = (state: RootState) => state.taskSlice.pomoTask;
// export const selectPomoTaskFirst = (state: RootState) => state.taskSlice.pomoTask[0];
export const selectSelectedTaskIndex = (state: RootState) => state.taskSlice.selectedTaskIndex;
export default taskSlice.reducer;
