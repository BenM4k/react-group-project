import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const fetchmission = createAsyncThunk('missions/data', async () => {
  try {
    const response = await axios.get(url);
    const res = response.data;
    return res;
  } catch (error) {
    throw new Error('Failed to get missions');
  }
});

const initialState = {
  selectedmissions: [],
  isLoading: true,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    joinmission: (state, action) => {
      state.selectedmissions = state.selectedmissions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
    },
    leavemission: (state, action) => {
      state.selectedmissions = state.selectedmissions.map((mission) => {
        if (mission.mission_id !== action.payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchmission.pending, (state) => ({
      ...state,
      isLoading: true,
    }))
      .addCase(fetchmission.fulfilled, (state, action) => ({
        ...state,
        selectedmissions: action.payload.map((item) => ({
          mission_name: item.mission_name,
          mission_id: item.mission_id,
          description: item.description,
          reserved: false,
        })),
        isLoading: false,
      }))
      .addCase(fetchmission.rejected, (state) => ({
        ...state,
        isLoading: false,
        error: true,
      }));
  },
});

export const { joinmission, leavemission } = missionSlice.actions;

export default missionSlice.reducer;
