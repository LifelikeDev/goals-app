import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register User
export const register = createAsyncThunk("auth/register", async(user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch(error) {
        const message = (error.message && error.message.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
          .addCase(register.pending, (state) => {
              state.isLoading = true;
          })
          .addCase(register.fulfilled, (state, action) => {
              state.isLoading = false;
              state.isSuccess = true
              state.user = action.payload
          })
          .addCase(register.rejected, (state, action) => {
              state.isLoading = false;
              state.isSuccess = true;
              state.message = action.payload
          })
          .build() 
   },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
