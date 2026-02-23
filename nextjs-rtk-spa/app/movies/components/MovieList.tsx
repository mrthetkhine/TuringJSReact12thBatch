'use client';

import {Movie} from "@/lib/types";
import MovieUI from "@/app/movies/components/MovieUI";

interface MovieListProps{
    movies:Movie[];
}
export default function MovieList({movies}: MovieListProps)
{
    return (<div>
        {
            movies.map(movie => <MovieUI movie={movie} key={movie._id}/>)
        }
    </div>);
}