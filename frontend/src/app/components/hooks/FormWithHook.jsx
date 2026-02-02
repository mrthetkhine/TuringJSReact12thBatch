'use client';
import {useState} from "react";
import useFormInput from "@/app/components/hooks/useFormInput";

export default function FormWithHook()
{
    const usernameInput= useFormInput("");
    const passwordInput = useFormInput("");


    const handleLogin=()=>{
        console.log('username ',usernameInput.value,'password', passwordInput.value);
    }
    return(<div>
        <div>
            <label>Username</label>
            <input type={"text"}
                   {...usernameInput}/>
        </div>
        <div>
            <label>Password</label>
            <input type={"password"}
                   {...passwordInput}/>
        </div>
        <button type={"button"} onClick={handleLogin}>Login</button>
    </div>);
}