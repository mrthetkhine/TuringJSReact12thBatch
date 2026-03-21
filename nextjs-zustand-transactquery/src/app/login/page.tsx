'use client';
import { Suspense } from 'react'
import LoginUI from "@/app/login/components/LoginUI";
import {useEffect} from "react";

import {useRouter} from "next/navigation";
import {useBoundStore} from "@/stores/useBoundStore";

export default function LoginPage()
{
    const {token} = useBoundStore();
    const router = useRouter();
    useEffect(()=>{
        if(token)
        {
            console.log('Already logged in');
            router.push('/');
        }
    },[]);
    return(<div>
        <Suspense fallback={<div>Loading...</div>}>
            <LoginUI/>
        </Suspense>
    </div>);
}