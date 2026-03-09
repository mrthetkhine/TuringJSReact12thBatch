'use client';

import Button from "@mui/material/Button";
import * as React from "react";
import {useState} from "react";
import MovieDialog from "./MovieDialog";
import {Movie} from "@/app/lib/types";

interface EditMovieProps
{
    movie:Movie
}
export default function EditMovie({movie}:EditMovieProps)
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