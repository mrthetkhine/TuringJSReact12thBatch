'use client';
import LoginUI from "@/app/login/components/LoginUI";
import {useEffect} from "react";
import {useAppSelector} from "@/lib/hooks";
import {selectAuth} from "@/lib/features/auth/authSlice";
import {useRouter} from "next/navigation";

export default function LoginPage()
{
    const auth = useAppSelector(selectAuth);
    const router = useRouter();
    useEffect(()=>{
        if(auth)
        {
            console.log('Already logged in');
            router.push('/');
        }
    },[]);
    return(<div>
        <LoginUI/>
    </div>);
}