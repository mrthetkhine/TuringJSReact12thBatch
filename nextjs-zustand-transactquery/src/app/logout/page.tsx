'use client';
import Button from "@mui/material/Button";
import * as React from "react";

import {useRouter} from "next/navigation";
import {useBoundStore} from "@/stores/useBoundStore";

export default function LogoutPage() {
    const router = useRouter();
    const {logout} = useBoundStore();
    const btnLogoutHandler = ()=>{
        logout();
        router.push('/login');
    };
    return(<div>
        <Button type="button" variant="contained" onClick={btnLogoutHandler}>
            Logout
        </Button>
    </div>);
}