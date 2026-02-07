'use client';

import HomePage from "@/app/components/router/HomePage";
import Dashboard from "@/app/components/router/Dashboard";
import Router from "@/app/components/router/Router";

export default function RouterDemo()
{
    const routes = [
        {
            path:'/home',
            label:'Home',
            component:<HomePage/>
        },
        {
            path:'/dashboard',
            label:'Dashboard',
            component:<Dashboard/>,
        }
    ]
    return(<div>
        <Router routes={routes}>

        </Router>
    </div>);
}