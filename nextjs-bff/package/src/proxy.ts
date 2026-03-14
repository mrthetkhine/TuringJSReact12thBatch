import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {cookies} from "next/headers";

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
    //console.log('Proxy ',request);
    let url = new URL(request.url);
    console.log('middleware Request ',url.pathname);
    const cookieStore = await cookies();
    const token = cookieStore.get('token')
    if(!token)
    {
        let redirectUrl = new URL('/authentication/login', request.url)
        await cookieStore.set("redirectUrl", url.pathname,{
            httpOnly:true,
        });
        return NextResponse.redirect(redirectUrl);
    }
    else
    {
        return NextResponse.next();
    }

}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
   matcher: [
        '/',
        '/movies',
        '/movies/:path*',
        /*'/about'*/
    ],
}