import { createSlice } from "@reduxjs/toolkit";
// import i18next from "../idiom/i18n";
// const { changeLanguage } = i18next;

const initialState = {
  assets: [],
  companies: [],
  units: [],
  users: [],
  workordes: [],
};

export const slice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    assetsChange(state, { payload }) {
      return { ...state, assets: payload };
    },
    companiesChange(state, { payload }) {
      return { ...state, companies: payload };
    },
    unitsChange(state, { payload }) {
      return { ...state, units: payload };
    },
    usersChange(state, { payload }) {
      return { ...state, users: payload };
    },
    workordersChange(state, { payload }) {
      return { ...state, workordes: payload };
    },
  },
});

export const { assetsChange, companiesChange, unitsChange, usersChange, workordersChange } = slice.actions;
export const selectData = (state) => state.data;
export default slice.reducer;
