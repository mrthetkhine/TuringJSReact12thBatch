'use client';
import {useBoundStore} from "@/stores/useBoundStore";

export default function Counter()
{
    const {count,inc,dec} = useBoundStore();

    return (<div>
        <button onClick={()=>dec()}>-</button>
            Counter {count}
        <button onClick={()=>inc()}>+</button>


    </div>);
}
