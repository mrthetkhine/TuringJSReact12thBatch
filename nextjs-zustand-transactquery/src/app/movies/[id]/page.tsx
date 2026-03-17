'use client';

import {useParams, useRouter} from "next/navigation";
import MovieDetailsUI from "@/app/movies/[id]/MovieDetailsUI";
import {Movie} from "@/lib/types";
import Button from "@mui/material/Button";
import {prefetchMovies, useGetMovieById} from "@/lib/hooks/movieHook";
import {useEffect, useState} from "react";

/*const movie :Movie =  {
    "_id": "69650920f311abe1f015b15b",
    "title": "21 days later",
    "director": {
        "name": "Christopher Nolan",
        "phoneNo": "09993",
        "_id": "69650920f311abe1f015b15c"
    },
    "year": 2025,
}*/
 function MovieDetailsPage()
{
    const {id}:{id:string} = useParams<{
        id:string;
    }>();
    prefetchMovies();
    const {movie} = useGetMovieById(id);

    console.log('MovieDetails Page render ',movie);
    const router = useRouter();
    const onBackHandler = () => {
        router.push("/movies");
    }
    return (<div>
        <Button variant="contained" onClick={onBackHandler} >Back</Button>
        {
           movie?._id && <MovieDetailsUI movie={movie}/>
        }
    </div>);

}

export default MovieDetailsPage;