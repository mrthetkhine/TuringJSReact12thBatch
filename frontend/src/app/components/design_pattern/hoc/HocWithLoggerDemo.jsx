'use client';

import withLogger from "@/app/components/design_pattern/hoc/withLogger";

function Component1()
{
    return(<div>
        Component 1
    </div>);
}
function Component2()
{
    return(<div>
        Component 2
    </div>);
}
const Component1WithLogger = withLogger(Component1);
const Component2WithLogger = withLogger(Component2);
export default function HocWithLoggerDemo() {
    return (<div>
        <Component1WithLogger />
        <Component2WithLogger />
    </div>)
}