'use client';

import Button from "@mui/material/Button";
import * as React from "react";
import {useState} from "react";
import MovieDialog from "@/app/movies/components/MovieDialog";

export default function NewMovieEntry()
{
    const [open, setOpen] = useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    }
    return (<div>
        <Button variant="contained" onClick={handleClickOpen} >New</Button>
        <MovieDialog open={open} setOpen={setOpen}/>
    </div>);
}