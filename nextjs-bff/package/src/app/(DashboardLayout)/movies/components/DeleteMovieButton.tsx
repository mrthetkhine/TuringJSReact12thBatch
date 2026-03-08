'use client';

import { useState } from "react";
import ConfirmDialog from "../../components/shared/ConfirmDialog";
import { Button } from "@mui/material";
import {deleteMovieByIdAction} from "@/app/lib/actions/movieAction";

interface DeleteButtonProps {
    movieId:string;
}
export default function DeleteMovieButton({movieId}: DeleteButtonProps) {
    const [openConfirm,setOpenConfirm]=useState(false);
    const onOkHandler = ()=>{
        console.log('Ok Handler');
        deleteMovieByIdAction(movieId);
        setOpenConfirm(false);
    }
    const onCancelHandler = ()=>{
        console.log('Cancel Handler');
    }

    return (<>
        <ConfirmDialog message="Are you sure you want to delete movie?"
                       dlgOpen={openConfirm}
                       onOk={onOkHandler}
                       onCancel={onCancelHandler}
                       setOpen={setOpenConfirm}
        />
        <Button variant="contained" onClick={()=>setOpenConfirm(true)} >Delete</Button>
    </>);
}