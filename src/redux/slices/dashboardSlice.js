import { createSlice } from "@reduxjs/toolkit";
import {
  getCompletionRate,
  getBurndownData,
  getWorkload,
  getMyWorkload,
} from "../features/dashboardThunks.js";

const initialState = {
  completionRate: null,
  burndownData: [],
  workload: null,
  myWorkload: null,
  isLoading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    clearDashboardError(state) {
      state.error = null;
    },
    resetDashboard(state) {
      state.completionRate = null;
      state.burndownData = [];
      state.workload = null;
      state.myWorkload = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Get Completion Rate
      .addCase(getCompletionRate.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCompletionRate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.completionRate = action.payload;
      })
      .addCase(getCompletionRate.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Get Burndown Data
      .addCase(getBurndownData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBurndownData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.burndownData = Array.isArray(action.payload)
          ? action.payload
          : action.payload.data || [];
      })
      .addCase(getBurndownData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Get Workload
      .addCase(getWorkload.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getWorkload.fulfilled, (state, action) => {
        state.isLoading = false;
        state.workload = action.payload;
      })
      .addCase(getWorkload.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Get My Workload
      .addCase(getMyWorkload.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMyWorkload.fulfilled, (state, action) => {
        state.isLoading = false;
        state.myWorkload = action.payload;
      })
      .addCase(getMyWorkload.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearDashboardError, resetDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
