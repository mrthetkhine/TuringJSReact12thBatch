'use client';

import {useState} from "react";

export default function PosForm()
{
    const [price,setPrice] = useState(0);
    const [qty,setQty] = useState(0);

    console.log('Render');
    return(<form>
        <div>
            <lable>Price</lable>
            <input type={"text"} value={price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
        <div>
            <lable>Qty</lable>
            <input type={"text"} value={qty} onChange={e=>setQty(e.target.value)}/>
        </div>
        <div>
            <lable>Total </lable>
            {price * qty }
        </div>
    </form>);
}