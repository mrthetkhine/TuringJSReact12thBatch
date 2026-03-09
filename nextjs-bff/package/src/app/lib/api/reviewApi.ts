import {Review} from '@/app/lib/types';
import axiosClient from '@/app/util/axiosClient';

export async function getAllReviewByMovieId(movieId:string):Promise<Review[]> {
    let response = await axiosClient.get<Review[]>(`/reviews/movies/${movieId}`);
    return response.data;
}
export async function saveReview(review:Partial<Review>):Promise<Review> {
    let response = await axiosClient.post<Review>(`/reviews/`,review);
    return response.data;
}
export async function updateReview(review:Partial<Review>):Promise<Review> {
    let response = await axiosClient.put<Review>(`/reviews/${review._id}`,review);
    return response.data;
}