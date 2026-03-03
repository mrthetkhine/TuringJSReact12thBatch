'use client';

import {useState} from "react";
import Button from "@mui/material/Button";
import * as React from "react";
import ReviewDialog from "@/app/movies/[id]/components/ReviewDialog";

interface ReviewEntryProps {
    movieId:string;
}
export default function ReviewEntry({movieId}: ReviewEntryProps)
{
    const [open, setOpen] = useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    }
    return (<div>
        <Button variant="contained" onClick={handleClickOpen} >New Review</Button>
        <ReviewDialog open={open} setOpen={setOpen} movieId={movieId}/>
    </div>);
}