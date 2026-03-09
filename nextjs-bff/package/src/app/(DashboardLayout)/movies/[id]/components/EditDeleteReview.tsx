'use client';

import {useState} from "react";
import Button from "@mui/material/Button";
import * as React from "react";
import ReviewDialog from "./ReviewDialog";
import { Review } from "@/app/lib/types";
import {deleteMovieByIdAction} from "@/app/lib/actions/movieAction";
import ConfirmDialog from "@/app/(DashboardLayout)/components/shared/ConfirmDialog";


interface EditDeleteReviewProps {
    review:Review;
}
export default function EditDeleteReview({review}: EditDeleteReviewProps)
{
    const [open, setOpen] = useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    }
    const [openConfirm,setOpenConfirm]=useState(false);
    const onOkHandler = ()=>{
        console.log('Ok Handler');
        //deleteMovieByIdAction(movieId);
        setOpenConfirm(false);
    }
    const onCancelHandler = ()=>{
        console.log('Cancel Handler');
    }
    return (<>
        <Button variant="contained" onClick={handleClickOpen} >Edit</Button>
        &nbsp;
        <Button variant="contained" onClick={()=>setOpenConfirm(true)}  >Delete</Button>
        <ConfirmDialog message="Are you sure you want to delete review?"
                       dlgOpen={openConfirm}
                       onOk={onOkHandler}
                       onCancel={onCancelHandler}
                       setOpen={setOpenConfirm}
        />
        <ReviewDialog open={open} setOpen={setOpen} movieId={review._id} reviewToEdit={review} />
    </>);
}