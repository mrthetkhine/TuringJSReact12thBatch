'use client';

import {useRef, useState} from "react";
import useCustomRef from "@/app/components/hooks/useCustomRef";

export default function WhyRef()
{
    //const clickCount= useRef(0);
    const clickCount= useCustomRef(0);
    console.log('Render clickCount ',clickCount.current);
    const [count,setCount] = useState(0);

    const incHandler = ()=>{
        setCount(count+1);
    };
    const anotherHandler = ()=>{
        clickCount.current++;
    }
    return(<div>
        <button onClick={incHandler}> + </button>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count-1)}> - </button>

        <br/>
        <button onClick={anotherHandler}> Another </button>
    </div>);
}