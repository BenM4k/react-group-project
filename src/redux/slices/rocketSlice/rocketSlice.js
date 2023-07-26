import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = createAsyncThunk('rockets/getRockets', async (_, thunkAPI) => {
  try {
    const resp = await axios.get(URL);
    const myRockets = [];
    resp.data.map((item) => {
      const newRocket = {
        id: item.id,
        name: item.rocket_name,
        desc: item.description,
        image: item.flickr_images[0],
        reserved: false,
      };
      myRockets.push(newRocket);
      return null;
    });
    return myRockets;
  } catch (e) {
    return thunkAPI.rejectWithValue('Failed to get Rockets');
  }
});

const rocketSlice = createSlice({
  name: 'rocket',
  initialState: {
    rockets: [],
    loadRockets: false,
    loadRocketsTimeout: false,
  },
  reducers: {
    reserveRocket: (state, action) => {
      state.rockets?.map((rocket) => {
        if (rocket.id === action.payload) {
          rocket.reserved = true;
        }
        return null;
      });
    },
    cancelReservation: (state, action) => {
      state.rockets?.map((rocket) => {
        if (rocket.id === action.payload) {
          rocket.reserved = false;
        }
        return null;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRockets.pending, (state) => {
        state.loadRockets = true;
      })
      .addCase(getRockets.fulfilled, (state, action) => {
        state.loadRockets = false;
        state.rockets = action.payload;
      })
      .addCase(getRockets.rejected, (state) => {
        state.loadRocketsTimeout = true;
        state.loadRockets = false;
      });
  },
});

export const { reserveRocket, cancelReservation } = rocketSlice.actions;

export default rocketSlice.reducer;
