'use client';
import Button from "@mui/material/Button";
import * as React from "react";
import {useAppDispatch} from "@/lib/hooks";
import { logout } from "@/lib/features/auth/authSlice";
import {useRouter} from "next/navigation";

export default function LogoutPage() {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const btnLogoutHandler = ()=>{
        dispatch(logout())
        router.push('/login');
    };
    return(<div>
        <Button type="button" variant="contained" onClick={btnLogoutHandler}>
            Logout
        </Button>
    </div>);
}