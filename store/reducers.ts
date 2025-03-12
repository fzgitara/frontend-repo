import { createSlice } from '@reduxjs/toolkit';
import { userLogin, fetchAllUsers } from './actions';

const initialStateAuth = {
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialStateAuth,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    }
  },
  extraReducers: builder => {
    builder.addCase(userLogin.pending, state => {
      state.loading = true;
      state.error = null;
    }).addCase(userLogin.fulfilled, (state, action: any) => {
      state.loading = false;
      state.user = action.payload.user,
      state.token = action.payload.token
    }).addCase(userLogin.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
});

const initialStateUser = {
  users: null,
  loading: false,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialStateUser,
  reducers: {
    data: (state, action) => {
      state.users = action.payload;
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchAllUsers.pending, state => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchAllUsers.fulfilled, (state, action: any) => {
      state.loading = false;
      state.users = action.payload;
    }).addCase(fetchAllUsers.rejected, (state, action: any) => {
      state.loading = false;
      state.error = action.error.message;
    });
  }
});

export const { login: loginAction } = authSlice.actions;
export const { data: userAction } = userSlice.actions;
export const authReducer = authSlice.reducer;
export const userReducer = userSlice.reducer;