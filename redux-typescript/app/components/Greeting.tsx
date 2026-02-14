'use client';
type GreetingProp = {
    message: string;
    another?: string;
}
export default function Greeting({message,another}:GreetingProp) {
    return (<div>
        Greet {message}
        Another {another}
    </div>);
}