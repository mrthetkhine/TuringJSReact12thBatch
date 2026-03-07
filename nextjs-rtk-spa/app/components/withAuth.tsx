'use client';

import {useAppSelector} from "@/lib/hooks";
import {selectAuth} from "@/lib/features/auth/authSlice";
import {usePathname, useRouter} from "next/navigation";

export default function withAuth(Component: React.JSX.ElementType,...props:any[]    ) {
    return function()
    {
        const pathname = usePathname();
        console.log('Path Name ',pathname);
        const auth = useAppSelector(selectAuth);
        const router = useRouter();
        if(!auth)
        {
            router.push('/login?redirectTo='+pathname);
        }
        else
        {
            return (<Component {...props}/>);
        }
    }
}