'use client';

import {Todo} from "@/lib/types";
import Button from "@mui/material/Button";
import {useBoundStore} from "@/stores/useBoundStore";

interface TodoUIProps
{
    todo:Todo
}
export default function TodoUI({todo}:TodoUIProps)
{
    const {updateTodo,deleteTodo} = useBoundStore();
    const updateHandler = ()=>{
        console.log('updateHandler ',todo);
        updateTodo({
            ...todo,
            title: todo.title + "Update"
        })
    };
    const deleteHandler = ()=>{
        console.log('Delete ',todo);
        deleteTodo(todo);
    }
    return(<div>
        {todo.title}
        &nbsp;
        <Button onClick={updateHandler} type="button" variant="contained">Update</Button>
        &nbsp;
        <Button onClick={deleteHandler} type="button" variant="contained">Delete</Button>
    </div>);
}