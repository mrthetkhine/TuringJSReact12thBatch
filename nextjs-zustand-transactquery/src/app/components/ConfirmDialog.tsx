'use client';

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {TextField} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import * as React from "react";
import {useEffect} from "react";

interface ConfirmDialogProps {
    message:string;
    onOk?: () => void;
    onCancel?: () => void;
    dlgOpen: boolean;
    setOpen: (open: boolean) => void;
}
export default function ConfirmDialog({message,onOk,onCancel,dlgOpen,setOpen}: ConfirmDialogProps)
{

    //console.log('Confirm Dialog ',dlgOpen);

    const handleClose = () => setOpen(false);

    if(!dlgOpen)
    {
        return null;
    }
    else
    {
        return(<React.Fragment>

            <Dialog open={dlgOpen} onClose={handleClose} >

                <DialogTitle>{message}</DialogTitle>
                <DialogContent>


                </DialogContent>
                <DialogActions>
                    <Button type="button" onClick={()=>{
                        onOk?.();
                        setOpen(false);
                    }}>
                        Ok
                    </Button>
                    <Button onClick={()=>{
                        onCancel?.();
                        setOpen(false);
                    }} type={"button"}>Cancel</Button>

                </DialogActions>

            </Dialog>
        </React.Fragment>);
    }

}
