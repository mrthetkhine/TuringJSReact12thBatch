'use client';

import {useEffect, useState} from "react";

export default function LoadTodo()
{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [todos, setTodos] = useState([]);
    useEffect(()=>{
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {
                setTodos(json);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
            });

    },[]);
    return(<div>
        {
            loading && !error && <div>Loading...</div>
        }
        {
            error && <div>Something went wrong</div>
        }
        {
            todos.map(td=><div key={td.id}>{td.title}</div>)
        }
    </div>);
}