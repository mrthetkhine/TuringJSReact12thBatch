import {useState} from "react";

export default function useCustomRef(initValue){
    const [state] = useState({
        current: initValue,
    });
    return state;
}