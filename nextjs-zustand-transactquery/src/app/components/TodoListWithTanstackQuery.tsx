'use client';

import {useQuery} from "@tanstack/react-query";
import {apiLoadAllTodos} from "@/lib/hooks/api/todoApi";
import TodoUI from "@/app/todos/components/TodoUI";

export default function TodoListWithTanstackQuery()
{
    const query = useQuery({ queryKey: ['todos'], queryFn: apiLoadAllTodos })
    return (<div>
        Todo list with tansact query
        {
            query.data?.map((todo) => <TodoUI todo={todo} key={todo.id}/>)
        }
    </div>);
}