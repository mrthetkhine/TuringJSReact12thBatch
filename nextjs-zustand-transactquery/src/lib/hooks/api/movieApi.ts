import {ApiResponse, Movie, Todo} from "@/lib/types";
import axiosInstance from "@/app/axiosInstance";

export async function apiLoadAllMovies():Promise<Movie[]>
{
    console.log("apiLoadAllMovies");
    let response = await axiosInstance.get<Movie[]>(`/movies`);
    let json = response.data;
    return json;
}
export async function apiSaveMovie(movie:Partial<Movie>):Promise<Movie>{
    console.log("apiSaveMovie");
    let response = await axiosInstance.post<Movie>(`/movies`, movie);
    return response.data;
}
export async function apiUpdateMovie(movie:Movie):Promise<Movie>{
    console.log("apiUpdateMovie");
    let response = await axiosInstance.put<Movie>(`/movies/${movie?._id}`, movie);
    return response.data;
}
export async function apiDeleteMovie(id:string):Promise<Movie>{
    console.log("apiDeleteMovie");
    let response = await axiosInstance.delete<Movie>(`/movies/${id}`);
    return response.data;
}