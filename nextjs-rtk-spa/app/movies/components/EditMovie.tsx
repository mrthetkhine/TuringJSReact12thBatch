'use client';
import {useState} from "react";
import {Movie, Review} from "@/lib/types";
import Button from "@mui/material/Button";
import MovieDialog from "@/app/movies/components/MovieDialog";
import * as React from "react";
interface EditMovieProps {
    movie:Movie;
}
export default function EditMovie({movie}: EditMovieProps)
{
    const [open, setOpen] = useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    }
    return (<div>
        &nbsp;
        <Button variant="contained" onClick={handleClickOpen} >Edit</Button>
        <MovieDialog open={open} setOpen={setOpen} movieToEdit={movie}/>
    </div>);
}