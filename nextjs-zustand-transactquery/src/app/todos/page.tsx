'use client';
import {Todo} from "@/lib/types";
import TodoList from "./components/TodoList";
import TodoEntry from "@/app/todos/components/TodoEntry";
import {useBoundStore} from "@/stores/useBoundStore";
import {useEffect} from "react";

const initialTodos:Todo[] = [
    {
        id:1,
        title:"Task 1",
    },
    {
        id:2,
        title:"Task 2",
    }
]
export default function TodoPage()
{
    const {todos,loadAllTodos,fetchTodos} = useBoundStore();
    useEffect(()=>{
        fetchTodos();
    },[]);
    return (<div>
        <TodoEntry/>
        <TodoList  todos={todos} />
    </div>);
}