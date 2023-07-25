import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/missionSlice';
import rocketSlice from './slices/rocketSlice/rocketSlice';

const store = configureStore({
  reducer: {
    missions: missionReducer,
    rocket: rocketSlice,
  },
});

export default store;
