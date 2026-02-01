'use client';

import {useEffect, useState} from "react";

export default function EffectLifeCycle()
{
    const [count, setCount] = useState(0);
    const [another,setAnother] = useState(0);

    useEffect(()=>{
       console.log('UseEffect1 fire send count info to backend');
    },[count]);
    useEffect(()=>{
        console.log('UseEffect2 fire ');
    },[another]);
    useEffect(()=>{
        console.log('UseEffect3 fire ');
    },[count,another]);
    console.log('Render ');

    return(<div>
        <button type={"button"} onClick={()=>setCount(count + 1)}>
            +
        </button>
        <h3>{count}</h3>
        <button type={"button"} onClick={()=>setCount(count - 1)}>
            -
        </button>
        <br/>
        <button type={"button"} onClick={()=>setAnother(another +1)}>
            Update Another
        </button>
    </div>);
}