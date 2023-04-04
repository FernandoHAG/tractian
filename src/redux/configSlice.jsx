import { createSlice } from "@reduxjs/toolkit";
import i18next from "../idiom/i18n";
const { changeLanguage } = i18next;

const initialState = {
  idiom: "us",
  theme: "dark",
  selectedTab: "companies",
};

export const slice = createSlice({
  name: "config",
  initialState: initialState,
  reducers: {
    changeIdiom(state, { payload }) {
      changeLanguage(payload);
      return { ...state, idiom: payload };
    },
    changeTheme(state, { payload }) {
      return { ...state, theme: payload };
    },
    changeSelectedTab(state, { payload }) {
      return { ...state, selectedTab: payload };
    },
  },
});

export const { changeIdiom, changeTheme, changeSelectedTab } = slice.actions;
export const selectConfig = (state) => state.config;
export default slice.reducer;
