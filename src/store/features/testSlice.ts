import { createSlice } from "@reduxjs/toolkit";

export interface TestState {
    count: number
    object: object
}

const initialState = {
    count: 0,
    object: { "key": "value" }
} as TestState;

export const test = createSlice({
    name: "test",
    initialState,
    reducers: {
        increment: (state) => { state.count += 1 },
        decrement: (state) => { state.count -= 1 },
        incrementByAmount: (state, action) => { state.count += action.payload },
        decrementByAmount: (state, action) => { state.count -= action.payload },
        saveObject: (state, action) => { state.object = action.payload },
    },
});

export const {
    increment,
    decrement,
    incrementByAmount,
    decrementByAmount,
} = test.actions;
export default test.reducer;