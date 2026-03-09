'use server';
import {ReviewSchema, ReviewSchemaForm} from "@/app/lib/schema/reviewSchema";
import {MovieSchema} from "@/app/lib/schema/movieSchema";
import {saveReview, updateReview} from "../api/reviewApi";
import { Review } from "../types";
import {revalidatePath} from "next/cache";

export async function saveOrUpdateReview(reviewFormData:ReviewSchemaForm)
{
    const validation = ReviewSchema.safeParse(reviewFormData);
    console.log('validation', validation);
    if(validation.success)
    {
        console.log('Success');
        let data:any = validation.data;
        if(data?._id)
        {
            console.log('update review');
            try {
                let updatedReview = await updateReview(data as Review);
                revalidatePath(`/movies/${updatedReview.movie}`);
                return updatedReview;
            }
            catch(err){
                throw err;
            }
        }
        else
        {
            console.log('save review');
            try {
                let savedReview = await saveReview(data as Review);
                revalidatePath(`/movies/${savedReview.movie}`);
                return savedReview;
            }
            catch(err){
                throw err;
            }
        }
    }
    else
    {
        return validation.error;
    }
}