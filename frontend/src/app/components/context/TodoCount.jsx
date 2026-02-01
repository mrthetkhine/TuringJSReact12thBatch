'use client';

import {useContext} from "react";
import {TodoContext} from "@/app/components/context/TodoContext";

export default function TodoCount()
{
    const {todos,dispatch} = useContext(TodoContext);
    return(<div>
        Todo count {todos.length}
    </div>);
}