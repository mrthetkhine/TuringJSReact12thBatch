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
    const deleteItem = (text) => {
        console.log('Delete item',text);
        setItems(items.filter(item => item !== text));
    }
    const updateItem = (text) => {
        console.log('Update item',text);
        setItems(items.map(item => item == text? `${text} updated` : item));
    }
    return (<div>
        <button type={"button"} onClick={addItem}>Add item</button>
        {
            items.map((item, index) => (<div key={index}>
            {item}
                <button type={"button"} onClick={()=>deleteItem(item)}>Delete</button>
                &nbsp;
                <button type={"button"} onClick={()=>updateItem(item)}>Update</button>
            </div>))
        }
    </div>);
}