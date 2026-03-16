'use client';

import { useIsFetching } from '@tanstack/react-query'
import TodoUI from "@/app/todos/components/TodoUI";
import {useLoadAllTodos} from "@/lib/hooks/todoHook";
import Button from "@mui/material/Button";
import TodoEntryTwo from "@/app/components/TodoEntryTwo";


export default function TodoListWithTanstackQuery()
{
    const isFetching = useIsFetching();
    const { isPending, refetch, data, error,isSuccess } = useLoadAllTodos();
    //console.log('query ', data);
    const btnRefetchHandler =()=>{
        refetch();
    };
    if (isFetching )
    {
        return <div>Queries are fetching in the background...</div>;
    }
    else
    {
        return (<div>
            Todo list with tansact query
            <Button type={"button"} variant={"contained"} onClick={btnRefetchHandler}>Refetch</Button>
            <TodoEntryTwo/>
            {
                isSuccess && data?.map((todo) => <TodoUI todo={todo} key={todo._id}/>)
            }
        </div>);
    }

}