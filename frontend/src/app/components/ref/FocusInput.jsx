'use client';

import {useRef} from "react";

export default function FocusInput()
{
    const inputRef = useRef(null);
    const onClickHandler = ()=>{
        console.log('Focus ',inputRef.current);
        inputRef.current.focus();
    };
    return(<div>
        <input type={"text"} ref={inputRef}/>
        <button type={"button"} onClick={onClickHandler}>Focus</button>
    </div>);
}