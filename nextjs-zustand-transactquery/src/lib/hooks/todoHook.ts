import {useMutation, useQuery} from "@tanstack/react-query";
import {apiDeleteTodoById, apiLoadAllTodos, apiSaveTodo} from "@/lib/hooks/api/todoApi";
import { Todo } from "../types";
import {queryClient} from "@/lib/hooks/queryClient";

export function useLoadAllTodos()
{
    return useQuery({
        queryKey: ['todos'],
        queryFn: apiLoadAllTodos,
        //enabled: false,
    });
}
//pessmistic update
export function useMutationSaveTodo()
{
    return  useMutation({
        mutationFn: apiSaveTodo,
        onError: (error, variables, onMutateResult, context) => {
            // An error happened!
            console.log(`rolling back optimistic update with id ${onMutateResult}`)
        },
        onSuccess: (data, variables, onMutateResult, context) => {
            console.log('Success ',data);
            //queryClient.invalidateQueries({ queryKey: ['todos'] })
            queryClient.setQueryData(["todos"],(oldState:Todo[]) => [...oldState,data]);
        },
    })
}
//optimistic update
export function useMutationDeleteTodo()
{
    return  useMutation({
        mutationFn: apiDeleteTodoById,
        onMutate:async (id,context)=>{
            const oldState:Todo[] = queryClient.getQueryData(['todos'])??[];
            queryClient.setQueryData(['todos'], (oldState:Todo[]) => oldState.filter(td=>td._id!=id))

            return {oldState};//context
        },
        onError: (error, variables, onMutateResult, context) => {
            queryClient.setQueryData(['todos'], onMutateResult?.oldState)
        },
        onSuccess: (data, variables, onMutateResult, context) => {
            console.log('Success ',data);
        },
    })
}