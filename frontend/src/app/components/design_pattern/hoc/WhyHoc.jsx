'use client';

import {useEffect} from "react";

function Component1()
{
    useEffect(()=>{
        console.log("Component 1 rendered");
    },[])
    return (<div>
        Component 1
    </div>);
}
function Component2()
{
    useEffect(()=>{
        console.log("Component 2 rendered");
    },[])
    return (<div>
        Component 2
    </div>);
}
export default function WhyHoc()
{
    return(<div>
        <Component1/>
        <Component2/>
    </div>);
}