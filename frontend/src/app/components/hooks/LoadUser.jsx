'use client';

import {useEffect, useState} from "react";

export default function LoadUser()
{
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => {
                setUsers(json);
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
            users.map(user=><div key={user.id}>{user.name}</div>)
        }
    </div>);
}