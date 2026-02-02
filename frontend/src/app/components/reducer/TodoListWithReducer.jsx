'use client';

import {useReducer} from "react";
import {TodoEntry, TodoItem} from "@/app/components/TodoList";
import useCustomReducer from "@/app/components/hooks/useCustomReducer";

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
export function todoReducer(state,action)
{
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'UPDATE_TODO':
            return state.map(todo=>todo.id === action.payload.id?action.payload:todo);
        case 'DELETE_TODO':
            return state.filter(todo=>todo.id !== action.payload.id);
    }
}
let id = 4;
function newTodo(text)
{
    return {
        id: id++,
        title: text,
    }
}
export default function TodoListWithReducer()
{
    //const [todos,dispatch] = useReducer(todoReducer,initState);
    const [todos,dispatch] = useCustomReducer(todoReducer,initState);

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