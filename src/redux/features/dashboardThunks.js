import api from "../../config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCompletionRate = createAsyncThunk(
  "dashboard/getCompletionRate",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/dashboard/completion");
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch completion rate"
      );
    }
  }
);

export const getBurndownData = createAsyncThunk(
  "dashboard/getBurndownData",
  async (projectId, { rejectWithValue }) => {
    try {
      const res = await api.get(`/dashboard/burndown?projectId=${projectId}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch burndown data"
      );
    }
  }
);

export const getWorkload = createAsyncThunk(
  "dashboard/getWorkload",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/dashboard/workload");
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch workload data"
      );
    }
  }
);

export const getMyWorkload = createAsyncThunk(
  "dashboard/getMyWorkload",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/dashboard/my-workload");
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch my workload"
      );
    }
  }
);
