import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Store";

export interface taskType {
  pomoTask: object[];
}

const initialState: taskType = {
  pomoTask: [],
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addPomoTask : (state,action:PayloadAction<object>)=>{
        state.pomoTask.push(action.payload);
    },
  }
});

export const {addPomoTask} = taskSlice.actions;
export const selectPomoTask = (state: RootState) => state.taskSlice.pomoTask;

export default taskSlice.reducer;