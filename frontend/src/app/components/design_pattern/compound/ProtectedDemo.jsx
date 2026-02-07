'use client';

import Protected from "@/app/components/design_pattern/compound/Protected";

function Page1()
{
    return (<div>
        Page1
    </div>);
}
export default function ProtectedDemo()
{
    return(<div>
        <Protected render={()=><h1>Access denied</h1>}>
            <Page1/>
        </Protected>
    </div>);
}