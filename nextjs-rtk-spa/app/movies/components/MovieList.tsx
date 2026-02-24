'use client';

import {Movie} from "@/lib/types";
import MovieUI from "@/app/movies/components/MovieUI";
import { Box } from "@mui/material";
import {useRouter} from "next/navigation";
import Button from "@mui/material/Button";

interface MovieListProps{
    movies:Movie[];
}
function renderAction(movie:Movie)
{
    const router = useRouter();
    const onDetailHandler = ()=>{
        console.log('Go to details');
        router.push(`/movies/${movie._id}`);
    };
    const onDeleteHandler = ()=>{
        console.log('Go to delete');
    }
    return(<Box sx={{alignItems:'flex-end'}} >
        &nbsp;
        <Button variant="contained" onClick={onDeleteHandler} >Delete</Button>
        &nbsp;
        <Button variant="contained" onClick={onDetailHandler} >Movie Details</Button>
    </Box>);
}
export default function MovieList({movies}: MovieListProps)
{
    return (<div>
        {
            movies.map(movie => <MovieUI movie={movie} key={movie._id}
                                                render={renderAction}/>)
        }
    </div>);
}