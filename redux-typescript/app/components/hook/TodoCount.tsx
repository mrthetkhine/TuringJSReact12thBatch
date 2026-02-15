'use client';
import {useAppSelector} from "@/lib/hooks";
import {selectTodo} from "@/lib/features/todo/todoSlice";

export default function TodoCount()
{
    const todos = useAppSelector(selectTodo);
    return (<div>
        Todo count {todos.length}
    </div>);
}