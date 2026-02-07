'use client';

import {useEffect, useState} from "react";
import useCustomRouter from "@/app/components/router/useCustomRouter";

export default function Router({routes})
{
    const [activeIndex,setActiveIndex] = useState(0);

    const route = useCustomRouter();
    useEffect(()=>{
        console.log('Register popstate');

        window.addEventListener('popstate', (event)=>{
            console.log('popstate event ',event);
        })
        window.addEventListener("routeChange", (event) => {
            console.log("routechange ",event);
            let path = event.path;
            let index = 0;
            console.log('Path in router ',path);
            for(let i = 0; i < routes.length; i++){
                console.log('router path ',routes[i].path);
                if(routes[i].path === path){
                    index = i;
                    console.log('Index found',index);
                    break;
                }
            }
            setActiveIndex(index);
        })
    },[])

    useEffect(()=>{
        route(routes[0].path);
    },[])
    const routeClickHandler = (index) => {
        console.log('routeClickHandler', index);
        console.log('index component', routes[index].component);
        setActiveIndex(index);
    }

    return (<div>
        Router demo
        <ol>
            {
                routes.map((route, index) =><li key={index} onClick={()=>routeClickHandler(index)}>
                    {route.label}
                </li>)
            }
        </ol>
        <div>
            {
                routes[activeIndex].component
            }
        </div>

    </div>);
}