import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { decodeToken, getAllUsers, login, register } from "../../api/auth";
import { deleteCookie, getCookie } from "../../ultils/cookies";

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
export const authAsyncRegister = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await register(user);
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
export const authAsyncDecodeToken = createAsyncThunk(
  "auth/decodeToken",
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await decodeToken(token);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  accessToken: "",
  users: [],
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout:(state) => {
      deleteCookie('token');
      state.accessToken = getCookie("token");
    },
    isCookie:(state) => {
      state.accessToken = getCookie('token')
    }
  },
  extraReducers(builder){
    builder.addCase(authAsyncLogin.fulfilled,(state,action)=>{
        state.accessToken = action.payload.token
    })
    builder.addCase(authAsyncGetAll.fulfilled, (state, action) => {
      state.users = action.payload
    });
    builder.addCase(authAsyncDecodeToken.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(authAsyncDecodeToken.rejected, (state, action) => {
      state.user = action.payload;
    });
  }
});

// Action creators are generated for each case reducer function
export const { logout, isCookie } = authSlice.actions;
export default authSlice.reducer;
