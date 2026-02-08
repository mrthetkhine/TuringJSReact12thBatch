'use client';

import {useState} from "react";

function Child({another,onClick})
{
    console.log('Child render');
    return (<div>
        Child count <div>{another}</div>
        <button onClick={onClick}>Click</button>
    </div>);
}
function getHandler()
{
    console.log('get Handler');
    return function()
    {
        console.log('Handler clicked');
    }
}
export default function WhyUseCallBack()
{
    const [count,setCount] = useState(0);
    const [another,setAnother] = useState(0);
    function onClickHandler(){
        console.log('Click ');
    }
    console.log('Parent render');
    return(<div>

        <h1>{count}</h1>
        <h1>Another {another}</h1>
        <button onClick={()=>setCount(count+1)}>Update</button>
        <button onClick={()=>setAnother(another+1)}>Update Another</button>
        Why use callback.
        <Child onClick={getHandler()} another={another}/>
    </div>);
}