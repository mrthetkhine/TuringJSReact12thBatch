'use client';

import {useGetAllTodosQuery} from "@/lib/features/todoApi/todoApiSlice";
import React from "react";
import Button from "@mui/material/Button";

export default function RtkQueryTodoCount()
{
    const { data,refetch, isError, isLoading, isSuccess } = useGetAllTodosQuery(undefined);
    const onForceFetch =()=>{
        console.log('refetch');
        refetch();
    };
    if (isError) {
        return (
            <div>
                <h1>There was an error!!!</h1>
            </div>
        );
    }

    if (isLoading) {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }

    if (isSuccess) {
        return (<div>
            <Button variant="contained"  onClick={onForceFetch}>Refetch</Button>
            <h1> Todo count { data.length}</h1>
        </div>);
    }
}