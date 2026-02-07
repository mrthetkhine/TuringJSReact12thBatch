'use client';

import useAuth from "@/app/components/design_pattern/hoc/useAuth";

function Page1()
{
    const auth = useAuth();
    return (<div>
        {
            auth && <div>
            Page 1
            </div>
        }
        {
            !auth && <h1>Access denied</h1>
        }
    </div>);
}
function Page2()
{
    const auth = useAuth();
    return (<div>
        {
            auth && <div>
                Page 2
            </div>
        }
        {
            !auth && <h1>Access denied</h1>
        }
    </div>);
}
export default function WhyHocAuth()
{
    return(<div>
        <Page1/>
        <Page2/>
    </div>);
}