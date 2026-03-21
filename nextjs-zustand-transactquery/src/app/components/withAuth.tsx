'use client';


import {usePathname, useRouter} from "next/navigation";
import {useBoundStore} from "@/stores/useBoundStore";
import {useEffect} from "react";

export default function withAuth(Component: React.JSX.ElementType,...props:any[]    ) {
    return function()
    {
        const pathname = usePathname();
        console.log('Path Name ',pathname);
        const {token} = useBoundStore();
        const router = useRouter();
        useEffect(() => {
            if(!token)
            {
                router.push('/login?redirectTo='+pathname);
            }
        }, []);

        return (<Component {...props}/>);
    }
}