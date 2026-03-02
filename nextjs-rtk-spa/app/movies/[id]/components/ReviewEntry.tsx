'use client';

import {useState} from "react";
import Button from "@mui/material/Button";
import * as React from "react";
import ReviewDialog from "@/app/movies/[id]/components/ReviewDialog";

export default function ReviewEntry()
{
    const [open, setOpen] = useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    }
    return (<div>
        <Button variant="contained" onClick={handleClickOpen} >New</Button>
        <ReviewDialog open={open} setOpen={setOpen}/>
    </div>);
}