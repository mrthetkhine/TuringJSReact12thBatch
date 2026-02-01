'use client';

import {useEffect, useState} from "react";

export default function TimerDemo2()
{
    const [count,setCount] = useState(0);
    const [now,setNow] = useState(new Date());
    useEffect(() => {
        console.log('setInterval registered');
        let timer= setInterval(()=>{

            setNow(new Date());
            console.log('setnow run');
        },1000);
        return () => {
            console.log('Cleanup from effect');
            clearInterval(timer);
        };
    }, []);

    //console.log('Render');
    return(<div>
        {now.toLocaleTimeString()}

        <h3>{count}</h3>
        <button type={"button"} onClick={()=>setCount(count+1)}>
            +
        </button>
    </div>);
}