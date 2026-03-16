'use client';

import {useState} from 'react';
import {Movie} from "@/lib/types";
import MovieUI from "@/app/movies/components/MovieUI";
import { Box } from "@mui/material";
import {useRouter} from "next/navigation";
import Button from "@mui/material/Button";
import ConfirmDialog from "@/app/components/ConfirmDialog";


interface MovieListProps{
    movies:Movie[];
}
function renderAction(movie:Movie)
{

    //console.log('Render ActionMovie ');
    const router = useRouter();
    const [openConfirm,setOpenConfirm]=useState(false);

    const onOkHandler = ()=>{
        console.log('Ok delete');
       /* deleteMovie(movie)
            .unwrap()
            .then((result)=>{
                console.log('Movie successfully deleted');
            });*/
    }
    const onCancelHandler = ()=>{
        console.log('Cancel Handler');
    }


    const onDetailHandler = ()=>{
        console.log('Go to details');
        router.push(`/movies/${movie._id}`);
    };
    const onDeleteHandler = ()=>{
        console.log('Go to delete');
        setOpenConfirm(true);
    }

    return(<Box sx={{alignItems:'flex-end'}} >
        <ConfirmDialog message="Are you sure you want to delete movie?"
                       dlgOpen={openConfirm}
                       onOk={onOkHandler}
                       onCancel={onCancelHandler}
                       setOpen={setOpenConfirm}
        />
        &nbsp;
        <Button variant="contained" onClick={onDeleteHandler} >Delete</Button>
        &nbsp;
        <Button variant="contained" onClick={onDetailHandler} >Movie Details</Button>
    </Box>);
}
export default function MovieList({movies}: MovieListProps)
{
    return (<div>
        {
            movies.map(movie => <MovieUI movie={movie} key={movie._id}
                                                render={renderAction}/>)
        }
    </div>);
}