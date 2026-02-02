'use client';

import {useReducer} from "react";
import useCustomReducer from "@/app/components/hooks/useCustomReducer";

function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
            };
        case 'DECREMENT':
            return {
                count: state.count - 1,
            }
    }
}
const initState = {
    count :0
}
export default function CounterWithReducer()
{
    //const [state,dispatch] = useReducer(counterReducer,initState );
    const [state,dispatch] = useCustomReducer(counterReducer,initState );
    const inc=()=>{
        dispatch({
            type:'INCREMENT',
        })
    };
    const dec=()=>{
        dispatch({
            type:'DECREMENT',
        })
    };
    return (<div>

        <button type={"button"} onClick={inc}>+</button>
        &nbsp;
        <h1>
            {state.count}
        </h1>
        &nbsp;
        <button type={"button"} onClick={dec}>-</button>
    </div>);
}