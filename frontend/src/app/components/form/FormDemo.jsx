'use client';
import {useState} from "react";

export default function FormDemo() {
    const [newTodo,setNewTodo] = useState('');

    console.log('New Todo ',newTodo);
    const onChange = (e)=>{
        //console.log('e.target ',e.target);
        setNewTodo(e.target.value);
    };
    const addTodo = () => {
        console.log('New Todo ', newTodo);
        setNewTodo('');
    }
    return(<div>
        <div>New Todo</div>
        <input type={"text"} value={newTodo}
                             onChange={onChange} />
        <button type={"button"} onClick={addTodo}>Add</button>
    </div>)
}
