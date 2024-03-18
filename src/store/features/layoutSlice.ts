import { createSlice } from "@reduxjs/toolkit";

export interface LayoutState {
    notificationBar: boolean
    searchView: boolean
}

const initialState = {
    notificationBar: false,
    searchView: false,
} as LayoutState;

export const layout = createSlice({
    name: "layout",
    initialState,
    reducers: {
        reset: () => initialState,
        openNotificationBar: (state) => { state.notificationBar = true },
        closeNotificationBar: (state) => { state.notificationBar = false },
        openSearchView: (state) => { state.searchView = true },
        closeSearchView: (state) => { state.searchView = false },
    },
});

export const {
    reset,
    openNotificationBar,
    closeNotificationBar,
    openSearchView,
    closeSearchView,
} = layout.actions;
export default layout.reducer;