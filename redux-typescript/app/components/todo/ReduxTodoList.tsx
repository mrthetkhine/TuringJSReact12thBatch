'use client';
import {useAppDispatch, useAppSelector} from "@/lib/hooks";

import {addTodo, clearAndLoad, deleteTodo, loadAllTodo, selectTodo, updateTodo} from "@/lib/features/todo/todoSlice";
import {useContext, useEffect, useState} from "react";
import TodoContext from "@/app/components/hook/TodoContext";
import {Todo} from "@/app/components/hook/ListTodo";
let id = 3;
function getNextId()
{
    return id++;
}
function TodoEntry()
{
    const dispatch = useAppDispatch();
    const [todo, setTodo] = useState('');
    const onAddHandler = ()=>{

        setTodo('');
        let newTodo:Todo = {
            id : getNextId(),
            title : todo
        };
        console.log('Add Todo ',newTodo);
        //console.log('addTodo ',addTodo(newTodo));
        dispatch(addTodo(newTodo));
    };
    return (<div>
        <label>New Todo</label>
        <input type={"text"} value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type={"button"} onClick={onAddHandler}>Add</button>
    </div>);
}
function TodoItem({todo}: { todo: Todo }) {
    const dispatch = useAppDispatch();
    const onDeleteTodo = () => {
        dispatch(deleteTodo(todo));
    }
    const onUpdate = ()=>{
        dispatch(updateTodo({
            ...todo,
            title: todo.title + " updated",
        }))
    }
    return <div>
        {
            todo.title
        }
        &nbsp;
        <button type={"button"} onClick={onDeleteTodo}>Delete</button>
        &nbsp;
        <button type={"button"} onClick={onUpdate}>Update</button>
    </div>;
}
export default function ReduxTodoList()
{
    const dispatch = useAppDispatch();
    const todos = useAppSelector(selectTodo);

    useEffect(() => {
        dispatch(loadAllTodo());
    },[]);
    const btnHandler = ()=>{
        dispatch(clearAndLoad());
    }
    return (<div>
        <button type={"button"} onClick={btnHandler}>Clear and load</button>
        <TodoEntry/>
        {
            todos?.map(todo=><TodoItem
                key={todo.id}
                todo={todo}/>)
        }
    </div>);
}