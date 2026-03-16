'use client';
import Button from "@mui/material/Button";
import {useState} from "react";
import {TextField} from "@mui/material";
import {useBoundStore} from "@/stores/useBoundStore";
import {useMutationSaveTodo} from "@/lib/hooks/todoHook";

let id = 3;
function nextId()
{
    return id++;
}
export default function TodoEntryTwo()
{
    const {mutate:saveTodo} = useMutationSaveTodo();
    const {addTodo} = useBoundStore();
    const [todoText,setTodoText] = useState('');
    const btnHandler = ()=>{
        console.log('Todo text',todoText);
        saveTodo({
            title:todoText,
        });
        setTodoText('');
    };
    return(<div>
        <TextField type={"text"} value={todoText}
               onChange={(e) => setTodoText(e.target.value)}/>
        <Button onClick={btnHandler} type="button" variant="contained">Add</Button>
    </div>);
}