'use client';
import {useState} from "react";

export default function ObjectUpdate()
{
    const [person,setPerson]=useState({
        name : 'Jhon',
        age : 30,
    });
    const updateAge = ()=>{
        setPerson({
            ...person,
            age: person.age+1,
        });
    }
    return(<div>
        <h1>Name {person.name}</h1>
        <h2>Age {person.age}</h2>
        <button type={"button"} onClick={updateAge}>
            Update Age
        </button>
    </div>);
}