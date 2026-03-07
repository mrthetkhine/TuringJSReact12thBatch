import {Movie} from '@/app/lib/types';
import axiosClient from '@/app/util/axiosClient';

export async function getAllMovies():Promise<Movie[]> {
    let response = await axiosClient.get<Movie[]>('/movies');
    return response.data;
}