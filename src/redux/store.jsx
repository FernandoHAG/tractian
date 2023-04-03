import { configureStore } from "@reduxjs/toolkit";
import idiomReducer from "./idiomSlice";

export default configureStore({
  reducer: {
    idiom: idiomReducer,
  },
});
