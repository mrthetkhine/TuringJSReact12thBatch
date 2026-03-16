'use client';
import styles from './ReviewUI.module.css';
import {Review} from "@/lib/types";
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import * as React from "react";
import {useState} from "react";
import ConfirmDialog from "@/app/components/ConfirmDialog";
import ReviewDialog from "@/app/movies/[id]/components/ReviewDialog";

interface ReviewUI {
    review: Review;
}
export default function ReviewUI({review}: ReviewUI)
{
    //console.log('ReviewUI',review);

    const [openConfirm,setOpenConfirm]=useState(false);

    const onOkHandler = ()=>{
        console.log('Ok Handler');
       /* deleteReview(review)
            .then(()=>{
                console.log('Review successfully deleted');
            });*/
    }
    const onCancelHandler = ()=>{
        console.log('Cancel Handler');
    }
    const onDeleteHandler = ()=>{
        console.log('Go to delete');
        setOpenConfirm(true);
    }
    const [open, setOpen] = useState(false);
    const handleClickOpen = ()=>{
        setOpen(true);
    }
    return(<div className={styles['review-ui-container']}>

        <ConfirmDialog message="Are you sure you want to delete review?"
                       dlgOpen={openConfirm}
                       onOk={onOkHandler}
                       onCancel={onCancelHandler}
                       setOpen={setOpenConfirm}
        />
        <ReviewDialog open={open} setOpen={setOpen} reviewToEdit={review} movieId={review.movie} />
        <Card sx={{ display: 'flex' }}>

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent >

                <Typography component="div">
                    {review.review}
                </Typography>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" value={review.rating}  readOnly />
                </Stack>
                <Box>
                    <Button variant="contained" onClick={handleClickOpen}>Edit</Button>
                    &nbsp;
                    <Button variant="contained" onClick={onDeleteHandler}>Delete</Button>
                </Box>
            </CardContent>


        </Box>

    </Card>
        </div>);
}