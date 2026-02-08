import api from "../../config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/register", userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to register user",
      );
    }
  },
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/login", credentials);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to login",
      );
    }
  },
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.post("/auth/logout");
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to logout",
      );
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/auth/me");
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch current user",
      );
    }
  },
);

export const updateUserProfile = createAsyncThunk(
  "auth/updateUserProfile",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await api.put("/auth/profile", userData);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to update profile",
      );
    }
  },
);

export const changePassword = createAsyncThunk(
  "auth/changePassword",
  async (passwordData, { rejectWithValue }) => {
    try {
      const res = await api.put("/auth/change-password", passwordData);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to change password",
      );
    }
  },
);