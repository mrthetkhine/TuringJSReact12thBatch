'use server';
import {revalidatePath} from "next/cache";
import {deleteMovieById} from "@/app/lib/api/movieApi";
import {MovieSchema, MovieSchemaForm} from "../schema/movieSchema";

export async function deleteMovieByIdAction(id:string)
{
    let deletedMovie = await deleteMovieById(id);
    revalidatePath('/movies');
    return deletedMovie;
}
export async function saveOrUpdateMovie(movieFormData:MovieSchemaForm)
{
    //console.log('Form Data ', formData);
    //const movieFormData = Object.fromEntries(formData);
    const validateMovieForm = MovieSchema.safeParse(movieFormData);
    console.log('validateMovieForm', validateMovieForm);
    if(!validateMovieForm.success)
    {

    }
}