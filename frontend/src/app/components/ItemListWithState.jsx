'use client';
import {useState} from "react";
let id = 3;
export default function ItemListWithState() {
    const [items, setItems] = useState(['Apple','Orange','Banana']);

    const addItem = () => {
        let itemName = 'Item '+id ;
        id++;
        //items.push(itemName);
        setItems([...items,itemName]);
        console.log('add items ',items);
    }
    return (<div>
        <button type={"button"} onClick={addItem}>Add item</button>
        {items.map((item, index) => (<div key={index}>
            {item}
        </div>))}
    </div>);
}