import {Review} from "@/lib/types";
import axiosInstance from "@/app/axiosInstance";

export async function apiLoadAllReviewByMovie(movieId:string):Promise<Review[]>
{
    console.log("apiLoadAllReviewByMovie ",movieId);
    let response = await axiosInstance.get<Review[]>(`/reviews/movies/${movieId}`);
    return response.data;
}
export async function apiSaveReview(review:Partial<Review>)
{
    console.log("apiSaveReview ",review);
    let response = await axiosInstance.post<Review>(`/reviews`,review);
    return response.data;
}
export async function apiUpdateReview(review:Review)
{
    console.log("apiUpdateReview ",review);
    let response = await axiosInstance.put<Review>(`/reviews/${review._id}`,review);
    return response.data;
}
export async function apiDeleteReview(review:Review):Promise<Review>
{
    console.log("apiDeleteReview ",review);
    let response = await axiosInstance.delete<Review>(`/reviews/${review._id}`);
    return response.data;
}