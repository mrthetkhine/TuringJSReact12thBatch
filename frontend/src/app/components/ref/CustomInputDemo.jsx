'use client';

import {useRef} from "react";

function MyInput({ref})
{
    return (<div>
        My Input
        <input ref={ref} type={"text"}/>
    </div>);
}

export default function CustomInputDemo()
{
    const ref = useRef(null);
    const onClickHandler = ()=>{
        
        ref.current.focus();
    };
    return(<div>
        <button type={"button"} onClick={onClickHandler}>Focus</button>
        <MyInput ref={ref}/>
    </div>);
}