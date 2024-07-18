import { createSlice } from "@reduxjs/toolkit";

const initalstate = {

}

const timeSlice = createSlice({
    name: "time",
    initialState: initalstate,
    reducers: {
        startTimer: (state) => {
            // Start the timer
        }
    }
})

export default timeSlice.reducer