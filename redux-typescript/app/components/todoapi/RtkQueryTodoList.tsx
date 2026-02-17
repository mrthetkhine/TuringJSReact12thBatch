'use client';
import {useGetQuotesQuery} from "@/lib/features/quotes/quotesApiSlice";
import {
    useDeleteTodoMutation,
    useGetAllTodosQuery,
    useSaveTodoMutation,
    useUpdateTodoMutation
} from "@/lib/features/todoApi/todoApiSlice";

import React,{KeyboardEvent, useState} from "react";
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import {catchRejection} from "@reduxjs/toolkit/src/listenerMiddleware/utils";

function TodoEntry()
{
    const [saveTodo,saveTodoResult ] = useSaveTodoMutation();
    const [todo, setTodo] = useState('');
    const onAddHandler = ()=>{

        setTodo('');
        saveTodo({
            title : todo,
            completed:false,
        });

    };
    return (<div>

        <TextField id="outlined-basic" label="New Todo" variant="standard" value={todo} onChange={(e) => setTodo(e.target.value)}/>

        <Button variant="contained"  onClick={onAddHandler}>Add</Button>
    </div>);
}

interface TodoListProps {
    todos: TodoModel[]
}

interface TodoItemProps{
    todo:TodoModel;
}
function TodoItem({todo}: TodoItemProps) {
    const [updateTodo,updateTodoResult ] = useUpdateTodoMutation();
    const [deleteTodo,deleteTodoResult ] = useDeleteTodoMutation();

    const [todoText, setTodoText] = useState(todo.title);
    const [isEditing, setEditing] = useState(false);
    const handleKeyDown = (event:KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // Perform your desired action here, e.g., submit the form, alert the value, etc.
           setEditing(false);
           console.log('Update ',todoText);
           const todoToUpdate = {
               ...todo,
               title: todoText,
           }
           updateTodo(todoToUpdate)
               .unwrap()
               .then(data=>console.log('update success',data))
               .catch((err)=>console.log('erorr in update ',err));
        }
    };
    const onDeleteHandler = ()=>{
        console.log('Delete ',todo);
        deleteTodo(todo)
            .unwrap()
            .then((data)=>{
                console.log('Successfully deleted ',data);
            })
            .catch((err)=>{
                console.log('Error while deleting ',err);
            })  ;
    }
    return <div>
        {!isEditing && todoText}
        {
            isEditing &&
            <TextField id="outlined-basic" label="New Todo"
                       variant="standard"
                       value={todoText}
                       onChange={(e) => setTodoText(e.target.value)}
                       InputProps={{
                           onKeyDown:handleKeyDown ,
                       }}/>
        }
        &nbsp;
        <Button variant="contained"  onClick={()=>setEditing(true)}>Edit</Button>
        &nbsp;
        <Button variant="contained"  onClick={onDeleteHandler}>Delete</Button>
    </div>;
}

function TodoList({todos}: TodoListProps) {
    return (<div>
        {
            todos.map(todo=><TodoItem key={todo._id} todo={todo}/>)
        }
    </div>);
}
//const RtkFetchTodo = withRtkQueryData(TodoList,useGetAllTodosQuery,undefined)
export default function RtkQueryTodoList()
{
    const { data, isError, isLoading, isSuccess } = useGetAllTodosQuery(undefined);
    if (isError) {
        return (
            <div>
                <h1>There was an error!!!</h1>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (isSuccess) {
        return (<div>
            <TodoEntry/>
            <TodoList todos={data} />
        </div>);
    }

}