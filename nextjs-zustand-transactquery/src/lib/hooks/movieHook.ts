import {useMutation, useQuery, useSuspenseQuery} from "@tanstack/react-query";
import {apiDeleteMovie, apiLoadAllMovies, apiSaveMovie, apiUpdateMovie} from "./api/movieApi";
import { queryClient } from "./queryClient";
import {Movie, Todo} from "../types";

export function useLoadAllMovies()
{
    return useQuery({
        queryKey: ['movies'],
        queryFn: apiLoadAllMovies,
        //enabled: false,
    });
}

export function useGetMovieById(id:string)
{
    const data = useSuspenseQuery({
        queryKey: ['movies'],
        queryFn: apiLoadAllMovies // Provide the function to fetch data if needed
    });
    return {
        movie:data?.data?.filter((movie:Movie)=>movie._id===id)[0]
    }
}
export function prefetchMovies()
{
    return queryClient.prefetchQuery({
        queryKey: ['movies'],
        queryFn: apiLoadAllMovies,
    })
}
//pessmistic update
export function useMutationSaveMovie()
{
    return  useMutation({
        mutationFn: apiSaveMovie,
        onError: (error, variables, onMutateResult, context) => {

        },
        onSuccess: (data, variables, onMutateResult, context) => {
            console.log('Success ',data);
            //queryClient.invalidateQueries({ queryKey: ['todos'] })
            queryClient.setQueryData(["movies"],(oldState:Movie[]) => [...oldState,data]);
        },
    })
};
//optimistic update
export function useMutationUpdateMovie()
{
    return  useMutation({
        mutationFn: apiUpdateMovie,
        onMutate:async (movie,context)=>{
            const oldState:Movie[] = queryClient.getQueryData(['movies'])??[];
            queryClient.setQueryData(['movies'], (oldState:Movie[]) => oldState.map(mv=>mv._id==movie._id?movie:mv))

            return {oldState};//context
        },
        onError: (error, variables, onMutateResult, context) => {
            queryClient.setQueryData(['movies'], onMutateResult?.oldState)
        },
        onSuccess: (data, variables, onMutateResult, context) => {
            console.log('Success ',data);
        },
    })
}
//optimistic update
export function useMutationDeleteMovie()
{
    return  useMutation({
        mutationFn: apiDeleteMovie,
        onMutate:async (movieId,context)=>{
            const oldState:Movie[] = queryClient.getQueryData(['movies'])??[];
            queryClient.setQueryData(['movies'], (oldState:Movie[]) => oldState.filter(mv=>mv._id!=movieId))

            return {oldState};//context
        },
        onError: (error, variables, onMutateResult, context) => {
            queryClient.setQueryData(['movies'], onMutateResult?.oldState)
        },
        onSuccess: (data, variables, onMutateResult, context) => {
            console.log('Success ',data);
        },
    })
}