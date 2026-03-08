import {Review} from '@/app/lib/types';
import axiosClient from '@/app/util/axiosClient';

export async function getAllReviewByMovieId(movieId:string):Promise<Review[]> {
    let response = await axiosClient.get<Review[]>(`/reviews/movies/${movieId}`);
    return response.data;
}