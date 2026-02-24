'use client';
import Button from "@mui/material/Button";
import * as React from 'react';
import {useState} from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { TextField} from "@mui/material";
import {useForm} from "react-hook-form";
import {movieSchema, movieSchemaForm} from "@/lib/schema/movieSchema";
import {zodResolver} from "@hookform/resolvers/zod";


export default function NewMovieEntry()
{
    console.log('render ');
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onSubmit = (data: movieSchemaForm) => {
        console.log('form  submit ',data); // call api with submitted data
    };
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, touchedFields },
    } = useForm<movieSchemaForm>({
        resolver: zodResolver(movieSchema),
        // defaultValues: specify default values for form inputs
        defaultValues: {
            title: "",
           /* year: 0,
            director:{
                name  :"",
                phoneNo:"",
            }*/
        },
    });
    console.log('errors ',errors);
    console.log('TouchFields', touchedFields);
    return(<div>
        <Button variant="contained" onClick={handleClickOpen} >New</Button>
        <React.Fragment>

            <Dialog open={open} onClose={handleClose} fullWidth={true}  maxWidth="lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                <DialogTitle>New Movie</DialogTitle>
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
                        Save
                    </Button>
                </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
    </div>);
}

