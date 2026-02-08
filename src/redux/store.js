import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import meetingReducer from "./slices/meetingSlice";
import projectReducer from "./slices/projectSlice";
import notificationReducer from "./slices/notificationSlice";
import documentReducer from "./slices/documentSlice";
import dashboardReducer from "./slices/dashboardSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    meeting: meetingReducer,
    project: projectReducer,
    notification: notificationReducer,
    documents: documentReducer,
    dashboard: dashboardReducer,
  },
});
