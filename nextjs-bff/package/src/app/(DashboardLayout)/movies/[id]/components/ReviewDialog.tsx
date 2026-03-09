'use client';

import {zodResolver} from "@hookform/resolvers/zod";

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
import { Review } from "@/app/lib/types";
import {ReviewSchema, ReviewSchemaForm } from "@/app/lib/schema/reviewSchema";
import {saveOrUpdateReview} from "@/app/lib/actions/reviewAction";


interface ReviewDialogProps{
    movieId:string;
    reviewToEdit?: Review;
    open: boolean;
    setOpen: (open: boolean) => void;
}
export default function ReviewDialog({movieId,reviewToEdit,open,setOpen}: ReviewDialogProps)
{

    const [pending,setPending] = useState(false);
    const [rating,setRating]=useState(reviewToEdit? reviewToEdit.rating : 0);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors, touchedFields },
    } = useForm<ReviewSchemaForm>({
        resolver: zodResolver(ReviewSchema),
        // defaultValues: specify default values for form inputs
        defaultValues: {
            _id:reviewToEdit?reviewToEdit._id:'',
            movie:reviewToEdit?reviewToEdit.movie:movieId,
            rating: reviewToEdit? reviewToEdit.rating:0,
            review: reviewToEdit ? reviewToEdit.review : '',
        },
    });
    const onSubmit = (data: ReviewSchemaForm) => {
        if(reviewToEdit)
        {
            let reviewToUpdate = {
                ... reviewToEdit,
                ...data,
            }
            console.log('update ',reviewToUpdate);
            setPending(true);
            saveOrUpdateReview(reviewToUpdate as any)
                .then(response=>{
                    console.log('Success');
                })
                .finally(()=>{
                    setPending(false);
                    setRating(0);
                    handleClose();
                    reset();
                });

        }
        else {
            let reviewToSave:Partial<Review> = {
                ...data
            }
            delete reviewToSave['_id'];
            console.log('Save Review  submit ',reviewToSave);
            setPending(true);
            saveOrUpdateReview(reviewToSave as any)
                .then(response=>{
                    console.log('Success');
                })
                .finally(()=>{
                   setPending(false);
                   setRating(0);
                   handleClose();
                   reset();
                });

        }

    };

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
                                <TextField
                                    label="Title"
                                    fullWidth
                                    margin="normal"
                                    type={"hidden"}
                                    {...register("_id")}
                                    error={!!errors._id}
                                    helperText={errors._id?.message}
                                    sx={{
                                        display:'none'
                                    }}
                                />
                                <TextField
                                    label="Title"
                                    fullWidth
                                    margin="normal"
                                    type={"hidden"}
                                    {...register("movie")}
                                    error={!!errors.movie}
                                    helperText={errors.movie?.message}
                                    sx={{
                                        display:'none'
                                    }}
                                />
                                <Rating name="half-rating-read" value={rating}
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