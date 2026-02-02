import api from "../../config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createProject = createAsyncThunk(
  "project/createProject",
  async (credential, { rejectWithValue }) => {
    try {
      const res = await api.post("/projects/", credential);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to create project"
      );
    }
  }
);

export const getProjects = createAsyncThunk(
  "project/getProjects",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/projects/");
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch all projects"
      );
    }
  }
);

export const getProjectById = createAsyncThunk(
  "project/getProjectById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.get(`/projects/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch project by id"
      );
    }
  }
);

export const updateProjectById = createAsyncThunk(
  "project/updateProjectById",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await api.put(`/projects/${id}`, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to update project"
      );
    }
  }
);

export const deleteProjectById = createAsyncThunk(
  "project/deleteProjectById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.delete(`/projects/${id}`);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to delete project"
      );
    }
  }
);
