'use client';
import {useReducer} from "react";
import {TodoContext} from "@/app/components/context/TodoContext";
import TodoWithContext from "@/app/components/context/TodoWithContext";
import {todoReducer} from "@/app/components/reducer/TodoListWithReducer";
import TodoCount from "@/app/components/context/TodoCount";

const initState = [
    {
        id:'1',
        title : 'Task 1',
    },
    {
        id:'2',
        title : 'Task 2',
    },
    {
        id:'3',
        title : 'Task 3',
    },
]
export default function TodoWithContextDemo()
{
    const [todos, dispatch] = useReducer(todoReducer, initState);
    const todoContext ={
        todos:todos,
        dispatch,
    }
    return(<TodoContext.Provider value={todoContext}>
            <TodoCount/>
            <TodoWithContext/>
        </TodoContext.Provider>);
}