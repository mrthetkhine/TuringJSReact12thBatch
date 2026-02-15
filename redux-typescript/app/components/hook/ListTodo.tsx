'use client';
import {useContext, useReducer, useState} from "react";
import TodoContext from "@/app/components/hook/TodoContext";

export interface Todo{
    id: number;
    title: string;
}
interface TodoListProps{
    todos:Todo[];
}
type TodoActionType = "ADD_TODO" | "UPDATE_TODO" | "DELETE_TODO";
export type TodoAction = {
    type: TodoActionType,
    payload: Todo
}

type TodoState= Todo[];
function todoReducer(state:TodoState =[], action: TodoAction):TodoState{
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "UPDATE_TODO":
            return state.map(td=>td.id==action.payload.id?action.payload:td);
        case "DELETE_TODO":
            return state.filter(td=>td.id!=action.payload.id);
    }
}

function TodoItem({todo}: { todo: Todo }) {
    const {dispatch} = useContext(TodoContext);
    const onDeleteTodo = () => {
        dispatch({
            type:"DELETE_TODO",
            payload:todo,
        })
    }
    return <div>
        {
            todo.title
        }
        &nbsp;
        <button type={"button"} onClick={onDeleteTodo}>Delete</button>
    </div>;
}

function TodoList({todos}: TodoListProps)
{

    return (<div>
        {
            todos.map(todo=><TodoItem key={todo.id} todo={todo}/>)
        }
    </div>);
}
const initData: Todo[] = [
    {
        id:1,
        title: 'Task 1',
    },
    {
        id:2,
        title: 'Task 2',
    },
]
let id = 3;
function getNextId()
{
    return id++;
}

function TodoEntry()
{
    const {dispatch} = useContext(TodoContext);
    const [todo, setTodo] = useState('');
    const onAddHandler = ()=>{

        setTodo('');
        let newTodo:Todo = {
            id : getNextId(),
            title : todo
        };
        console.log('Add Todo ',newTodo);
        dispatch({
            type:"ADD_TODO",
            payload:newTodo
        })
    };
    return (<div>
        <label>New Todo</label>
        <input type={"text"} value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button type={"button"} onClick={onAddHandler}>Add</button>
    </div>);
}
export default function ListTodo()
{
    const [state,dispatch] = useReducer(todoReducer, initData);


    return(<div>
        <TodoContext.Provider value={{state,dispatch}}>
            <TodoEntry/>
            <TodoList todos={state}/>
        </TodoContext.Provider>

    </div>);
}