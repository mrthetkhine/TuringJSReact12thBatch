'use client';

import {useContext, useReducer} from "react";
import {TodoEntry, TodoItem} from "@/app/components/TodoList";
import {TodoContext} from "@/app/components/context/TodoContext";



let id = 4;
function newTodo(text)
{
    return {
        id: id++,
        title: text,
    }
}
export default function TodoWithContext()
{
    const {todos,dispatch} = useContext(TodoContext);

    const addTodo = (todoText)=>{
        let todo = newTodo(todoText);
        console.log('Add todo ',todo);
        dispatch({
            type:'ADD_TODO',
            payload:todo,
        })
    }
    const updateTodo = (todo)=>{
        console.log('Update todo ',todo);
        dispatch({
            type:'UPDATE_TODO',
            payload:todo,
        })
    }
    const deleteTodo = (todo)=>{
        console.log('Delete todo ',todo);
        dispatch({
            type:'DELETE_TODO',
            payload:todo,
        })
    }
    return (<div>
        <TodoEntry addTodo = {addTodo}/>
        {
            todos.map(todo=><TodoItem key={todo.id}
                                      todo={todo}
                                      updateTodo={updateTodo}
                                      deleteTodo={deleteTodo}  />)
        }
    </div>);
}