'use client';
import {useGetQuotesQuery} from "@/lib/features/quotes/quotesApiSlice";
import {useGetAllTodosQuery} from "@/lib/features/todoApi/todoApiSlice";

import React, {useState} from "react";
import Button from '@mui/material/Button';

function TodoEntry()
{

    const [todo, setTodo] = useState('');
    const onAddHandler = ()=>{

        setTodo('');

    };
    return (<div>
        <label>New Todo</label>
        <input type={"text"} value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <Button variant="contained"  onClick={onAddHandler}>Add</Button>
    </div>);
}

interface TodoListProps {
    todos: TodoModel[]
}
function TodoList({todos}: TodoListProps) {
    return (<div>
        {
            todos.map(todo=><div key={todo._id}>
                {todo.title}
            </div>)
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