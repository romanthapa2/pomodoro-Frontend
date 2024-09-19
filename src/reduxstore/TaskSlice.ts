import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Store";

export interface taskType {
  pomoTask: object[];
  selectedTaskindex: number | null;
}

const initialState: taskType = {
  pomoTask: [],
  selectedTaskindex: null,
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
      state.selectedTaskindex = null;
    },
    selectTask: (state, action: PayloadAction<number>) => {
      state.selectedTaskindex = action.payload;
    },
  },
});

export const { addPomoTask,updateTask, deleteTask, clearTask,selectTask } = taskSlice.actions;
export const selectPomoTask = (state: RootState) => state.taskSlice.pomoTask;
// export const selectPomoTaskFirst = (state: RootState) => state.taskSlice.pomoTask[0];
export const selectSelectedTaskindex = (state: RootState) => state.taskSlice.selectedTaskindex;
export default taskSlice.reducer;
