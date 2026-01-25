'use client';
import {useState} from "react";

function Child()
{
    console.log('Child render');
    return (<div>
        <h2>Child </h2>
    </div>);
}
export default function Counter()
{
    let dummy = 0;

    const [count,setCount] = useState(0);
    const [another,setAnother] = useState(10);

    console.log('Counter render dummy ',dummy ,'count ',count);
    const increment = () => {
        console.log('counter increment ',count);
        setCount(count + 1);
        dummy++;
    };
    const decrement = () => {
        console.log('counter decrement ',count);
        setCount(count - 1);

        dummy--;
    }
    const updateAnother=()=>{
      setAnother(another+2);
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
        <div>
            <h1>Another {another}</h1>
            <button onClick={updateAnother}>Update Another</button>
        </div>
        <Child/>
    </div>)
}