'use client';
import Button from "@mui/material/Button";
import * as React from 'react';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {Movie} from "@/lib/types";
import { TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {MovieSchema, MovieSchemaForm} from "@/lib/schema/movieSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutationSaveMovie, useMutationUpdateMovie} from "@/lib/hooks/movieHook";


interface MovieDialogProps
{
    movieToEdit?:Movie;
    open: boolean;
    setOpen: (open: boolean) => void;
}
export default function MovieDialog({open,setOpen,movieToEdit}: MovieDialogProps)
{
    const {mutateAsync:saveMovie}= useMutationSaveMovie();
    const {mutateAsync:updateMovie}= useMutationUpdateMovie();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors, touchedFields },
    } = useForm<MovieSchemaForm>({
        resolver: zodResolver(MovieSchema),
        // defaultValues: specify default values for form inputs
        defaultValues: {
            title: movieToEdit? movieToEdit?.title:'',
            year: movieToEdit?movieToEdit?.year:0,
            director:{
                name  :movieToEdit?movieToEdit?.director?.name:"",
                phoneNo:movieToEdit?movieToEdit?.director?.phoneNo:"",
            }
        },
    });
    //console.log('render MovieDialog');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit = (data: MovieSchemaForm) => {
        if(movieToEdit)
        {

            let movieToUpdate:Movie = {
                ...movieToEdit,
                ...data,
                director:{
                    ...movieToEdit.director,
                    ...data.director,
                }
            }
            console.log('Update movie ',movieToUpdate);
            updateMovie(movieToUpdate)
                .then((result) => {
                    console.log('Updated movie ',result);
                    setOpen(false);
                    reset();
                });
        }
        else
        {
            console.log('Save Movie ',data);
            saveMovie(data as Partial<Movie>)
                .then((result)=>{
                    console.log('Saved movie ',result);
                    setOpen(false);
                    reset();
                });
        }

    };

    //console.log('errors ',errors);
    //console.log('TouchFields', touchedFields);
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
                            {movieToEdit?'Edit Movie':'New Movie'}
                        </DialogTitle>
                        <DialogContent>

                            <TextField
                                label="Title"
                                fullWidth
                                margin="normal"
                                {...register("title")}
                                error={!!errors.title}
                                helperText={errors.title?.message}
                            />
                            <TextField
                                label="Year"
                                fullWidth
                                margin="normal"
                                {...register("year")}
                                error={!!errors.year}
                                helperText={errors.year?.message}
                            />
                            <TextField
                                label="Director Name"
                                fullWidth
                                margin="normal"
                                {...register("director.name")}
                                error={!!errors.director?.name}
                                helperText={errors.director?.name?.message}
                            />
                            <TextField
                                label="Director Phone No"
                                fullWidth
                                margin="normal"
                                {...register("director.phoneNo")}
                                error={!!errors.director?.phoneNo}
                                helperText={errors.director?.phoneNo?.message}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit" >
                                {movieToEdit?'Update':'Save'}
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </React.Fragment>
        </div>);
    }

}

