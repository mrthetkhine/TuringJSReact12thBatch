import {ApiResponse, Movie, Todo} from "@/lib/types";
import axiosInstance from "@/app/axiosInstance";

export async function apiLoadAllMovies():Promise<Movie[]>
{
    console.log("apiLoadAllMovies");
    let response = await axiosInstance.get<Movie[]>(`/movies`);
    let json = response.data;
    return json;
}