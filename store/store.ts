import { configureStore } from '@reduxjs/toolkit'
import { authReducer, userReducer,  } from '../store/reducers';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth: authReducer,
      user: userReducer
    }
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];