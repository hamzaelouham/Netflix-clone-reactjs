import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reduces";

export default configureStore({
  reducer: {
    auth: authReducer,
  },
});
