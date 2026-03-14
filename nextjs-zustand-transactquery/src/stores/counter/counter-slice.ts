import {create,StateCreator} from "zustand";
import {produce} from "immer";
import {devtools} from "zustand/middleware";
export interface CounterState
{
    count: number;
}
export interface CounterAction
{
    inc:()=> void;
    dec:()=> void;
}
export type CounterSlice = CounterState & CounterAction;
export const initialState: CounterState = {
    count: 10,
}
export const useCounterStore =create<CounterSlice>()(
    devtools(
        (set:any)=>({
        ...initialState,
        dec:()=>set( produce((state: CounterState) => void(--state.count))),
        inc:()=>set( produce((state: CounterState) => void(++state.count))),
        })
    )
);