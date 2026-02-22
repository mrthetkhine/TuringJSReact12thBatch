'use client';
import {useEffect, useState} from "react";

export default function ClientTodoList()
{
    const [todos,setTodos]=useState<any[]>([]);
    useEffect(()=>{
        console.log('fetch data');
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json));
    },[]);
    console.log('client todo render');
    return (<div>
        Client todo list
        {
            todos.map(td=><div key={td.id}>
                {td?.title}
            </div>)
        }
    </div>);
}