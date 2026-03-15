'use client';

import {Todo} from "@/lib/types";
import TodoUI from "./TodoUI";

interface TodoListProps {
    todos:Todo[]
}
export default function TodoList({todos}:TodoListProps)
{
    return (<div>
        {
            todos.map(td=><TodoUI key={td.id} todo={td}/>)
        }
    </div>);
}