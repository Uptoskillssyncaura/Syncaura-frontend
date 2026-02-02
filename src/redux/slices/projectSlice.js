import { createSlice } from "@reduxjs/toolkit";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProjectById,
  deleteProjectById,
} from "../features/projectThunks.js";

const initialState = {
  projects: [],
  project: null,
  isLoading: false,
  error: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    clearProject(state) {
      state.project = null;
    },
    clearError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Project
      .addCase(createProject.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects.unshift(action.payload.project || action.payload);
      })
      .addCase(createProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Get All Projects
      .addCase(getProjects.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = Array.isArray(action.payload) 
          ? action.payload 
          : action.payload.projects || [];
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Get Project By ID
      .addCase(getProjectById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProjectById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.project = action.payload.project || action.payload;
      })
      .addCase(getProjectById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update Project
      .addCase(updateProjectById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProjectById.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.projects.findIndex(
          (p) => p._id === (action.payload.project?._id || action.payload._id)
        );
        if (index !== -1) {
          state.projects[index] = action.payload.project || action.payload;
        }
        state.project = action.payload.project || action.payload;
      })
      .addCase(updateProjectById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete Project
      .addCase(deleteProjectById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteProjectById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = state.projects.filter(
          (p) => p._id !== (action.payload.project?._id || action.payload._id)
        );
      })
      .addCase(deleteProjectById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearProject, clearError } = projectSlice.actions;
export default projectSlice.reducer;
