'use client';

import { Button } from "@mui/material";
import {logoutAction} from "@/app/lib/actions/authAction";

export default function LogoutUI()
{
    const onClick = (): void => {
        console.log('Logout');
        logoutAction()
            .then(() => {
                console.log('Logout success');
            })
    };
    return(<div>
        <Button type={"button"} variant={"contained"} onClick={onClick}>
            Logout
        </Button>
    </div>);
}