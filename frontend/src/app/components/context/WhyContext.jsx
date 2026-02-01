'use client';

function Child({message})
{
    return(<div>
        Child {message}
    </div>);
}
function Parent({message})
{
    return(<div>
        Parent
        <Child message={message}/>
    </div>);
}
function GrandParent({message})
{
    return(<div>
        GrandParent
        <Parent message={message}/>
    </div>);
}
export default function WhyContext() {
    let message = "Hello World";
    return (<div>
        Why Context
        <GrandParent message={message}/>
    </div>);
}