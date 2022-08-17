import { createSlice } from "@reduxjs/toolkit";
import {
  orderHistory
} from "./userActions";

const initialState = {
  loading: false,
  loggedIn: true,
  loggedOut: false,
  error: null,
  totalItems: '',
  items: null,
};

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    history: (state) => {

    },
  },
  extraReducers: {
    [ orderHistory.pending ] : ( state ) => {
        state.loading = true
        state.error = null

    } ,
    [ orderHistory.fulfilled ] : ( state , { payload } ) => {
        state.loading = false
        state.totalItems = payload

    } ,
    [ orderHistory.rejected ] : ( state , { payload } ) => {
        state.loading = false
        state.error = payload

    } ,
  },
});
export const { history } = historySlice.actions;
export default historySlice.reducer;
