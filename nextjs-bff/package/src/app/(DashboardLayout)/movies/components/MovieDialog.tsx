'use client';
import Button from "@mui/material/Button";
import * as React from 'react';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {Movie} from "@/app/lib/types";
import { TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {MovieSchema, MovieSchemaForm} from "@/app/lib/schema/movieSchema";
import {zodResolver} from "@hookform/resolvers/zod";
import {saveOrUpdateMovie} from "@/app/lib/actions/movieAction";

interface MovieDialogProps
{
    movieToEdit?:Movie;
    open: boolean;
    setOpen: (open: boolean) => void;
}
export default function MovieDialog({open,setOpen,movieToEdit}: MovieDialogProps)
{
    const [pending,setPending] = useState(false);

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
            _id:movieToEdit? movieToEdit?._id:'',
            title: movieToEdit? movieToEdit?.title:'',
            year: movieToEdit?movieToEdit?.year:0,
            director:{
                name  :movieToEdit?movieToEdit?.director?.name:"",
                phoneNo:movieToEdit?movieToEdit?.director?.phoneNo:"",
            }
        },
    });
    console.log('render MovieDialog');

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = (data: MovieSchemaForm) => {
        console.log('onSubmit', data);

        if(movieToEdit)
        {
            console.log('Update movie');
            let movieToUpdate:Movie = {
                ...movieToEdit,
                ...data,
                director:{
                    ...movieToEdit.director,
                    ...data.director,
                }
            }
            setPending(true);
            saveOrUpdateMovie(movieToUpdate)
                .then((response) => {
                    console.log('update done ',response)
                })
                .finally(()=>{
                    setPending(false);
                    handleClose();
                    reset();
                })
        }
        else
        {
            setPending(true);
            let newMovie = data;
            delete newMovie['_id'];
            saveOrUpdateMovie(newMovie)
                .then((response) => {
                    console.log('saveOrUpdateMovie done ',response)
                })
                .finally(()=>{
                    setPending(false);
                    handleClose();
                    reset();
                })
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
                                fullWidth
                                margin="normal"
                                type={"hidden"}
                                {...register("_id")}
                                error={!!errors._id}
                                helperText={errors._id?.message}
                                sx={{ display: 'none' }}
                            />
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
                            <Button type="submit" disabled={pending}>
                                {movieToEdit?'Update':'Save'}
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </React.Fragment>
        </div>);
    }

}

