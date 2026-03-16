
import {CounterSlice} from "@/stores/counter/counter-slice";
import {create} from 'zustand'
import {devtools} from "zustand/middleware";
import {immer} from "zustand/middleware/immer";
import {createCounterSlice} from "@/stores/counter/counter-slice";
import {createTodoSlice, TodoSlice} from "@/stores/todo/todoSlice";

export type MyState = CounterSlice & TodoSlice;

export const useBoundStore = create<MyState>()(
    devtools(
        immer(
            (...a) => ({
            ...createCounterSlice(...a),
            ...createTodoSlice(...a),
            /*
            ...createAuthSlice(...a),*/

            })
        )));

