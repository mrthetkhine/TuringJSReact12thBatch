'use client';
import {Movie, Review} from "@/lib/types";
import MovieUI from "@/app/movies/components/MovieUI";
import ReviewUI from "@/app/movies/[id]/components/ReviewUI";
import Button from "@mui/material/Button";
import * as React from "react";
import EditMovie from "@/app/movies/components/EditMovie";
import ReviewEntry from "@/app/movies/[id]/components/ReviewEntry";
import {useGetAllMoviesQuery} from "@/lib/features/movie/movieApiSlice";
import {useGetAllReviewByMovieIdQuery} from "@/lib/features/review/reviewApiSlice";

interface MovieDetailsUI {
    movie: Movie;
}
const reviews:Review [] = [
    {
        "_id": "696b5b248945b8c39816017a",
        "movie": "69650920f311abe1f015b15b",
        "rating": 1,
        "review": "first review for 21 day laters",

    },
    {
        "_id": "696b5b298945b8c39816017c",
        "movie": "69650920f311abe1f015b15b",
        "rating": 2,
        "review": "second review for 21 day laters",

    },
    {
        "_id": "696b64b838be7f85633d83d9",
        "movie": "69650920f311abe1f015b15b",
        "rating": 5,
        "review": "second review for 21 day laters",

    },
    {
        "_id": "696b64d038be7f85633d83dc",
        "movie": "69650920f311abe1f015b15b",
        "rating": 5,
        "review": "last review for 21 day laters",

    }
]
function renderAction(movie:Movie)
{
    return(<div>
        <EditMovie movie={movie}/>
    </div>);
}
export default function MovieDetailsUI({movie}:MovieDetailsUI)
{

    const { data:reviews, isError, isLoading, isSuccess } = useGetAllReviewByMovieIdQuery(movie._id);
    return(<div>
        <MovieUI movie={movie} render={renderAction}/>
        <ReviewEntry movieId={movie._id}/>
        {
            isSuccess && reviews.length >0 && reviews.map(review=><ReviewUI key={review._id} review={review}/>)
        }
    </div>);
}