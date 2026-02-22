'use client';

import Button from "@mui/material/Button";
import React from "react";
import { useRouter } from 'next/navigation'
interface Movie
{
    id:string;
    title:string;
}
const movies: Movie[] = [
    {
        id:'1',
        title:'Titanic',
    },
    {
        id:'2',
        title:'Avatar',
    },
    {
        id:'3',
        title:'Terminator',
    },
];
export default function MoviesPage()
{
    const router = useRouter();
    const btnHandler = (id:string)=>{
        console.log('movie id ',id);
        router.push(`/movies/${id}`);
    }
    return(<div>
        <h1>Movies</h1>
        {
            movies.map(movie=><div key={movie.id}>
                {movie.title}
                <Button variant="contained"  onClick={()=>btnHandler(movie.id)}>Movie Details</Button>
            </div>)
        }
    </div>);
}