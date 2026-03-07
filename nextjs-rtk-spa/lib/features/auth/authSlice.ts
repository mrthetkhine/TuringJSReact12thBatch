import {CounterSliceState} from "@/lib/features/counter/counterSlice";
import {createAppSlice} from "@/lib/createAppSlice";
import type {PayloadAction} from "@reduxjs/toolkit";
import {fetchCount} from "@/lib/features/counter/counterAPI";
import {LoginRequest} from "@/lib/types";

export interface AuthState
{
    token: string;
}
const initialState: AuthState = {
    token:'',
};
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const authSlice = createAppSlice({
    name: "auth",
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: (create) => ({

        login: create.asyncThunk(
            async (request: LoginRequest, { rejectWithValue }) => {
                const response = await fetch(`${BASE_URL}/users/login`, {
                    headers:{
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify(request),
                })
                const json = await response.json();
                if(!json.token)
                {
                    console.log('Failed to login in ',json);
                    return rejectWithValue(json);
                }
                return json.token;//payload-> fullfilled
            },
            {
                pending: (state) => {
                    state.token = '';
                },
                fulfilled: (state, action) => {
                    state.token = action.payload;
                },
                rejected: (state) => {

                },
            },
        ),
        logout: create.reducer((state) => {
            state.token = '';
        }),
    }),
    selectors: {
        selectAuth: (state) => state.token,

    },
});

export const { login, logout } = authSlice.actions;
export const { selectAuth  } = authSlice.selectors;
