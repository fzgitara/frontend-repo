import { BACKEND_URL } from '@/apis';
import { URL } from '@/apis/userApi';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userLogin = createAsyncThunk(
  'auth/login',
  async (data: { email: string, password: string }, { rejectWithValue }) => {
    const { email, password } = data;
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };

      const resp = await axios.post(
        `${BACKEND_URL}${URL.LOGIN}`, 
        { email, password },
        config
      );

      return resp.data;
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const fetchAllUsers = createAsyncThunk(
  'users/fetchAll',
  async () => {
    try {
      const { data } = await axios.get(BACKEND_URL + URL.FETCH_ALL);
      return data;
    } catch (error: any) {
      throw new Error(error.response.data);
    }
  }
);

export const click = () => {console.log('CLICK')}