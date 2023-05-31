import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUsers, login } from "../../api/auth";

export const authAsyncLogin = createAsyncThunk(
  "auth/login",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await login(user);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
export const authAsyncGetAll = createAsyncThunk(
  "auth/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getAllUsers();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  token: "",
  users:[]
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout:(state) => {
        state.token = ""
    }
  },
  extraReducers(builder){
    builder.addCase(authAsyncLogin.fulfilled,(state,action)=>{
        state.token = action.payload.token
    })
    builder.addCase(authAsyncGetAll.fulfilled, (state, action) => {
      state.users = action.payload
    });
  }
});

// Action creators are generated for each case reducer function
export const { logout } = authSlice.actions;
export default authSlice.reducer;
