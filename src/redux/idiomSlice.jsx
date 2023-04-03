import { createSlice } from "@reduxjs/toolkit";
import i18next from "../idiom/i18n";
const { changeLanguage } = i18next;

const initialState = {
  idiom: "us",
};

export const slice = createSlice({
  name: "idiom",
  initialState: initialState,
  reducers: {
    changeIdiom(state, { payload }) {
      changeLanguage(payload);
      return { ...state, idiom: payload };
    },
  },
});

export const { changeIdiom } = slice.actions;
export const selectIdiom = (state) => state.idiom;
export default slice.reducer;
