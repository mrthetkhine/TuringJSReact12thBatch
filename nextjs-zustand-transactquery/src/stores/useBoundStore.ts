
import {CounterSlice} from "@/stores/counter/counter-slice";
import {create} from 'zustand'
import {devtools, persist,createJSONStorage} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {createCounterSlice} from "@/stores/counter/counter-slice";
import {createTodoSlice, TodoSlice} from "@/stores/todo/todoSlice";
import {AuthSlice, createAuthSlice} from "@/stores/auth/authSlice";

export type MyState = CounterSlice & TodoSlice & AuthSlice;

export const useBoundStore = create<MyState>()(
    devtools(
        immer(
            persist((...a) => ({
                ...createCounterSlice(...a),
                ...createTodoSlice(...a),
                ...createAuthSlice(...a),
            }),
            {
                name: 'spa-store', // unique name for your storage key
                storage: createJSONStorage(() => localStorage),
            })

        )));

