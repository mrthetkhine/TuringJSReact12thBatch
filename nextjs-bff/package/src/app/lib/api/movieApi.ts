import {Movie} from '@/app/lib/types';
import axiosClient from '@/app/util/axiosClient';

export async function getAllMovies():Promise<Movie[]> {
    let response = await axiosClient.get<Movie[]>('/movies');
    return response.data;
}
export async function getMovieById(id:string):Promise<Movie> {
    let response = await axiosClient.get<Movie>(`/movies/${id}`);
    return response.data;
}
export async function deleteMovieById(id:string):Promise<Movie> {
    let response = await axiosClient.delete(`/movies/${id}`);
    return response.data;
}