import {useEffect} from "react";

export default function withLogger(Component){
    return function (props) {
        useEffect(()=>{
            console.log(Component.name," rendered");
        },[]);
        return <Component {...props} />;
        /*
        return <div>
        {Component}
        </div>
        * */
    }
}