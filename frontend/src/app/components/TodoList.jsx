'use client';

import {useState} from "react";

const initItem = [
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

function TodoItem({todo,updateTodo,deleteTodo}) {
    const [todoText, setTodoText] = useState(todo.title);
    const [edit, setEdit] = useState(false);

    const onEditHandler = ()=>{
        setEdit(!edit);
        if(edit)
        {
            updateTodo({
                ...todo,
                title: todoText,
            })
        }
    };
    const onDeleteHandler = ()=>{
        deleteTodo(todo);
    }
    return <div>
        {
            !edit&& todoText
        }
        {
            edit &&
            <input type={"text"} value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        }
        &nbsp;
        <button type={"button"} onClick={onEditHandler}>
            {
                edit?'Update' : 'Edit'
            }
        </button>
        &nbsp;
        <button type={"button"} onClick={onDeleteHandler}>
            Delete
        </button>
    </div>;
}
function TodoEntry({addTodo})
{
    const [todoText, setTodoText] = useState('');
    const onAddTodo = () => {
        addTodo(todoText);
        setTodoText('');
    }
    return (<div>
        <input type={'text'} value={todoText}
               onChange={(e) => setTodoText(e.target.value)}/>

        <button onClick={onAddTodo}>
            Add Todo
        </button>
    </div>);
}
let id = 4;
function newTodo(text)
{
    return {
        id: id++,
        title: text,
    }
}
export default function TodoList()
{
    const [todos,setTodos] = useState(initItem);
    const addTodo = (todoText)=>{
        let todo = newTodo(todoText);
        setTodos([...todos,todo]);
    };
    const updateTodo =(todo)=>{
        setTodos(todos.map(td=>td.id==todo.id?todo:td));
    }
    const deleteTodo = (todo)=>{
        setTodos(todos.filter(td=>td.id != todo.id))
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