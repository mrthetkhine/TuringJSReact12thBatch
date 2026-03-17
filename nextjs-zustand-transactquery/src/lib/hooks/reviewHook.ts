import {useMutation, useQuery} from "@tanstack/react-query";
import {apiLoadAllMovies} from "@/lib/hooks/api/movieApi";
import {Review} from "@/lib/types";
import {apiDeleteReview, apiLoadAllReviewByMovie, apiSaveReview, apiUpdateReview} from "@/lib/hooks/api/reviewApi";
import { queryClient } from "./queryClient";

export function useLoadAllReviewsByMovieId(movieId:string)
{
    return useQuery({
        queryKey: ['reviews',movieId],
        queryFn:()=> apiLoadAllReviewByMovie(movieId),
        //enabled: false,
    });
}
//pessmistic update
export function useMutationSaveReview()
{
    return  useMutation({
        mutationFn: apiSaveReview,
        onError: (error, variables, onMutateResult, context) => {

        },
        onSuccess: (data, variables, onMutateResult, context) => {
            console.log('Success ',data);

            queryClient.setQueryData(["reviews",data.movie],(oldState:Review[]) => [...oldState,data]);
        },
    })
};
//optimistic update
export function useMutationUpdateReview()
{
    return  useMutation({
        mutationFn: apiUpdateReview,
        onMutate:async (review,context)=>{
            const oldState:Review[] = queryClient.getQueryData(['reviews',review.movie])??[];
            queryClient.setQueryData(['reviews',review.movie], (oldState:Review[]) => oldState.map(rv=>rv._id==review._id?review:rv))

            return {oldState};//context
        },
        onError: (error, variables, onMutateResult, context) => {
            queryClient.setQueryData(['reviews',variables.movie], onMutateResult?.oldState)
        },
        onSuccess: (data, variables, onMutateResult, context) => {
            console.log('Success ',data);
        },
    })
}
//optimistic update
export function useMutationDeleteReview()
{
    return  useMutation({
        mutationFn: apiDeleteReview,
        onMutate:async (review,context)=>{
            const oldState:Review[] = queryClient.getQueryData(['reviews',review.movie])??[];
            queryClient.setQueryData(['reviews',review.movie], (oldState:Review[]) => oldState.filter(rv=>rv._id != review._id))

            return {oldState};//context
        },
        onError: (error, variables, onMutateResult, context) => {
            queryClient.setQueryData(['reviews',variables.movie], onMutateResult?.oldState)
        },
        onSuccess: (data, variables, onMutateResult, context) => {
            console.log('Success ',data);
        },
    })
}