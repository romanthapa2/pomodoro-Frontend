import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Store";

export interface taskType {
  pomoTask: string[];
  pomoTime: number;
}

const initialState: taskType = {
  pomoTask: [],
  pomoTime: 1,
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addPomoTask : (state,action:PayloadAction<string>)=>{
        state.pomoTask.push(action.payload);
    },
    addPomoTime : (state,action:PayloadAction<number>)=>{
        state.pomoTime = action.payload;
    }
  }
});


export const {addPomoTask,addPomoTime} = taskSlice.actions;
export const selectPomoTask = (state: RootState) => state.taskSlice.pomoTask;

export default taskSlice.reducer;