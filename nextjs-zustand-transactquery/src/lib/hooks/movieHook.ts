import {useQuery} from "@tanstack/react-query";
import {apiLoadAllTodos} from "@/lib/hooks/api/todoApi";
import { apiLoadAllMovies } from "./api/movieApi";

export function useLoadAllMovies()
{
    return useQuery({
        queryKey: ['movies'],
        queryFn: apiLoadAllMovies,
        //enabled: false,
    });
}