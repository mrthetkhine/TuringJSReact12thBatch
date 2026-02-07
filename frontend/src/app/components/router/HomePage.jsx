'use client';


import useCustomRouter from "@/app/components/router/useCustomRouter";

export default function HomePage()
{
    const route = useCustomRouter();
    const onClickHandler = (e) => {
        console.log('Go to dashboard');
        route('/dashboard');
    }
    return(<div>
        Home Page
        <button type={"click"} onClick={onClickHandler}>Go to dashboard</button>
    </div>);
}