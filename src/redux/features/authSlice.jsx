import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/auth";

export const authAsyncLogin = createAsyncThunk("auth/login",async (data)=>{
    try {
        const token = login(data);
        return token;
    } catch (error) {
        console.log(error)
    }
})

const initialState = {
  token: "",
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
  }
});

// Action creators are generated for each case reducer function
export default authSlice.reducer;
