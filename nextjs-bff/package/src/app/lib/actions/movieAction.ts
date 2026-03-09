'use server';
import {revalidatePath} from "next/cache";
import {deleteMovieById, saveMovie, updateMovie} from "@/app/lib/api/movieApi";
import {MovieSchema, MovieSchemaForm} from "../schema/movieSchema";
import { Movie } from "../types";

export async function deleteMovieByIdAction(id:string)
{
    let deletedMovie = await deleteMovieById(id);
    revalidatePath('/movies');
    return deletedMovie;
}
export async function saveOrUpdateMovie(movieFormData:MovieSchemaForm):Promise<any>
{
    //console.log('Form Data ', formData);
    //const movieFormData = Object.fromEntries(formData);
    const validateMovieForm = MovieSchema.safeParse(movieFormData);
    console.log('validateMovieForm', validateMovieForm);
    if(validateMovieForm.success)
    {
        console.log('Success');
        let data:any = validateMovieForm.data;
        if(data?._id)
        {
            //update
            console.log('updateMovie');

            try {
                let movie = await updateMovie(data?._id, data as Movie)
                revalidatePath(`/movies/${movie._id}`);
                return movie;
            }
            catch(err){
                console.log('Error in saving movie');
                throw err;
            }
        }
        else
        {
            console.log('Save movie');
            //save
            try {
                let movie = await saveMovie(data as Movie)
                revalidatePath('/movies');
                return movie;
            }
            catch(err){
                console.log('Error in saving movie');
                throw err;
            }
        }
    }
    else
    {
        //error
        return validateMovieForm.error;
    }
}