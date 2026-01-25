'use client';

import {useState} from "react";

function BatchUpdateCounter()
{

    const [count,setCount] = useState(0);

    console.log('Counter render count ',count);
    const increment = () => {
        console.log('counter increment ',count);
        /*
        setCount(count + 1);//0+1
        setCount(count + 1);//0+1
        setCount(count + 1);//0+1
        */
        setCount(count=>count + 1);
        setCount(count=>count + 1);
        setCount(count=>count + 1);

    };
    const decrement = () => {
        console.log('counter decrement ',count);
        setCount(count - 1);
    }
    const updateAnother=()=>{
        setCount(count + 1);
    };
    return (<div>
        <div>
            <button onClick={increment}>
                +
            </button>
            <h1>{count}</h1>

            <button onClick={decrement}>
                -
            </button>
        </div>


    </div>)
}
export default function BatchUpdateDemo(){
    return(<div>
        <h1>Batch update demo</h1>
        <BatchUpdateCounter/>
    </div>);
}