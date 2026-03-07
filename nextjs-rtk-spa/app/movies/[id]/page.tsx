'use client';

import {useParams, useRouter} from "next/navigation";
import MovieDetailsUI from "@/app/movies/[id]/MovieDetailsUI";
import {Movie} from "@/lib/types";
import Button from "@mui/material/Button";
import {useGetAllMoviesQuery} from "@/lib/features/movie/movieApiSlice";
import withAuth from "@/app/components/withAuth";

/*const movie :Movie =  {
    "_id": "69650920f311abe1f015b15b",
    "title": "21 days later",
    "director": {
        "name": "Christopher Nolan",
        "phoneNo": "09993",
        "_id": "69650920f311abe1f015b15c"
    },
    "year": 2025,
};*/
 function MovieDetailsPage()
{
    const {id}:{id:string} = useParams<{
        id:string;
    }>();
    console.log('movie id ',id);
    const { movie , isLoading } = useGetAllMoviesQuery(undefined,{
        selectFromResult:({data,isLoading})=>{
            return {
                // Return only the derived data and the specific status flags you need
                movie: (data ?? []).filter(m=>m._id=== id)[0] as Movie,
                isLoading,
            };
        },
    });
    console.log('movie ',movie);
    const router = useRouter();
    const onBackHandler = () => {
        router.push("/movies");
    }
    if(isLoading)
    {
        return (<div>Loading...</div>);
    }
    else if(movie)
    {
        return (<div>
            <Button variant="contained" onClick={onBackHandler} >Back</Button>
            <MovieDetailsUI movie={movie}/>
        </div>);
    }

}
const MovieDetailsWithAuth = withAuth(MovieDetailsPage);
export default MovieDetailsWithAuth;