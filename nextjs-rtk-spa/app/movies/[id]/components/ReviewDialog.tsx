'use client';
import {Review} from "@/lib/types";
import {zodResolver} from "@hookform/resolvers/zod";
import {ReviewSchemaForm,ReviewSchema} from "@/lib/schema/reviewSchema";
import * as React from "react";
import {useState} from "react";
import {useForm} from "react-hook-form";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {TextField} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

interface ReviewDialogProps{
    reviewToEdit?: Review;
    open: boolean;
    setOpen: (open: boolean) => void;
}
export default function ReviewDialog({reviewToEdit,open,setOpen}: ReviewDialogProps)
{
    const [rating,setRating]=useState(reviewToEdit? reviewToEdit.rating : 0);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit = (data: ReviewSchemaForm) => {
        console.log('form  submit ',data); // call api with submitted data
    };
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors, touchedFields },
    } = useForm<ReviewSchemaForm>({
        resolver: zodResolver(ReviewSchema),
        // defaultValues: specify default values for form inputs
        defaultValues: {
            rating: reviewToEdit? reviewToEdit.rating:0,
            review: reviewToEdit ? reviewToEdit.review : '',
        },
    });
    const ratingChangeHandler = (value:number|null) => {
        let num = value??0;
        setValue('rating',num);
        setRating(num);
    }
    if(!open)
    {
        return null;
    }
    else {
        return(<div>

            <React.Fragment>
                <Dialog open={open} onClose={handleClose} fullWidth={true}  maxWidth="lg">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogTitle>
                            {reviewToEdit?'Edit Review':'New Review'}
                        </DialogTitle>
                        <DialogContent>
                            <Stack spacing={1}>
                                <Rating name="half-rating-read" defaultValue={rating}
                                        onChange={(event, newValue) => {
                                            ratingChangeHandler(newValue);
                                        }}
                                />
                                <div style={{
                                    color:'red',
                                }}>
                                    {
                                        !!errors.rating && errors.rating?.message
                                    }
                                </div>

                            </Stack>
                            <TextField
                                label="Title"
                                fullWidth
                                margin="normal"
                                {...register("review")}
                                error={!!errors.review}
                                helperText={errors.review?.message}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" >
                                {reviewToEdit?'Update':'Save'}
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </React.Fragment>
        </div>);
    }
}