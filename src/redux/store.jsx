import { configureStore } from "@reduxjs/toolkit";
import configReducer from "./configSlice";
import dataReducer from "./dataSlice";

export default configureStore({
  reducer: {
    config: configReducer,
    data: dataReducer,
  },
});
