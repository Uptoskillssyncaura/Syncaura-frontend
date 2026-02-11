import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import meetingReducer from "./slices/meetingSlice";
import notificationReducer from "./slices/notificationSlice";

import authReducer from "./slices/authSlice";

export const store=configureStore({
    reducer:{
        auth:authReducer,
        theme: themeReducer,
        meeting:meetingReducer,
        notification: notificationReducer
    }
})

import documentReducer from "./slices/documentSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    meeting: meetingReducer,
    notification: notificationReducer,
    documents: documentReducer,
  },
});

