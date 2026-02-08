'use client';

import {useMemo, useState} from "react";

function factorial(n)
{
    console.log('compute factorial ',n);
    let result = 1;
    for(let i=1; i<=n; i++)
    {
        result *= i;
    }
    return result;
}
export default function MemoDemo()
{
    const [n,setN] = useState(0);
    const fact = useMemo(()=>factorial(n),[n]);

    const [count,setCount] = useState(0);
    return (<div>
        <input type={"text"}
               value={n}
               onChange={(event)=>setN(event.target.value)}/>
        <h1>{n} Factorial {fact} </h1>
        Use Memo
        <h1>Count {count}</h1>
        <button onClick={()=>setCount(count+1)}> Inc</button>
    </div>);
}