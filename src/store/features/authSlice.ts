import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

export interface AuthState {
    token?: string
    id?: string
    roles: Array<string>
    expiresIn: number
    isLogged: boolean
}

const initialState = {
    token: undefined,
    id: undefined,
    roles: [],
    expiresIn: 0,
    isLogged: false,
} as AuthState;

export const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: () => initialState,
        login: (state, action: PayloadAction<string>) => {
            const token = action.payload;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const context = jwtDecode<any>(token);
            state.token = token;
            state.roles = context.roles;
            state.id = context.sub;
            state.expiresIn = context.exp;
            state.isLogged = true;
        },
    },
});

export const {
    logout,
    login,
} = auth.actions;
export default auth.reducer;