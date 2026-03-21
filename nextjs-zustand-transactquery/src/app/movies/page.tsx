'use client';

import { Movie } from "@/lib/types";
import NewMovieEntry from "./components/NewMovieEntry";
import MovieList from "@/app/movies/components/MovieList";
import {useLoadAllTodos} from "@/lib/hooks/todoHook";
import {useLoadAllMovies} from "@/lib/hooks/movieHook";
import withAuth from "@/app/components/withAuth";

/*const movies: Movie[] = [
    {
        "_id": "69650920f311abe1f015b15b",
        "title": "21 days later",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "69650920f311abe1f015b15c"
        },
        "year": 2025,
    },
    {
        "_id": "6965093cf311abe1f015b15f",
        "title": "1 battle after another updated",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "69650a54ef55cbcffa1ddac8"
        },
        "year": 2500,

    },
    {
        "_id": "696cb3dca687681bdd8ee131",
        "title": "Matrix 1",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "696cb3dca687681bdd8ee132"
        },
        "year": 2025,
    },
    {
        "_id": "696cb75f754983fa0ca59fa3",
        "title": "Matrix 2",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "696cb75f754983fa0ca59fa4"
        },
        "year": 2025,

    },
    {
        "_id": "696cb8921100c80cf0624e51",
        "title": "Matrix 3",
        "director": {
            "name": "Christopher Nolan",
            "phoneNo": "09993",
            "_id": "696cb8921100c80cf0624e52"
        },
        "year": 2025,

    }
]*/
function MoviePage()
{
    const { isPending, refetch, data, error,isSuccess } = useLoadAllMovies();
    return (<div className={'movies-page-container'}>
        <NewMovieEntry/>
        {
            isSuccess && <MovieList movies={data}/>
        }

    </div>);
}
const MoviePageWithAuth = withAuth(MoviePage);
export default MoviePageWithAuth;