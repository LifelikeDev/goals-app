import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import goalService from "./goalService";

const initialState = {
    goals: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

// add goal
export const addGoal = () => {}


export const goalSlice = createSlice({
    name: "goal",
    initialState,
    reducers: {
        reset: (state) => initialState
    }
})


export const {reset} = goalSlice.actions;
export default goalSlice.reducer;