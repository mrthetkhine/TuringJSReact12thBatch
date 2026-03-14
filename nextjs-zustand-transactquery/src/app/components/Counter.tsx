'use client';
import {useCounterStore} from "@/stores/counter/counter-slice";

export default function Counter()
{
    const {count,inc,dec} = useCounterStore();

    return (<div>
        <button onClick={()=>dec()}>-</button>
            Counter {count}
        <button onClick={()=>inc()}>+</button>


    </div>);
}
