import { configureStore } from '@reduxjs/toolkit';
import rocketSlice from './slices/rocketSlice/rocketSlice';

const store = configureStore({
  reducer: {
    rocket: rocketSlice,
  },
});

export default store;
