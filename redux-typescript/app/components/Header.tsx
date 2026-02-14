'use client';
import React from "react";

interface HeaderProps  {
    message: string;
    tag:React.JSX.ElementType;
}
export default function Header({message, tag}: HeaderProps )
{
    let Component= tag;
    return (<Component>
        {message}
    </Component>);
}