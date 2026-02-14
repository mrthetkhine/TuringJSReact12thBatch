'use client';

import React from "react";

interface Greeting2Prop  {
    message: string;

}
const Greeting2:React.FC<Greeting2Prop> = ({message}:Greeting2Prop)=> {
    return (<div>
        Greeting from Greeting 2 {message}
    </div>)
}
export default Greeting2;