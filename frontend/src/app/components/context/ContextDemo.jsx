'use client';


import {useContext, useState} from "react";
import {ThemeContext} from "@/app/components/context/ThemeContext";

function Child()
{
    const theme = useContext(ThemeContext);
    return(<div style={{
        color:theme.color,
    }}>
        Child
    </div>);
}
function Parent()
{
    return(<div>
        Parent
        <Child />
    </div>);
}
function GrandParent()
{
    return(<div>
        GrandParent
        <Parent />
    </div>);
}
export default function ContextDemo()
{
    const [theme,setTheme] = useState({
        color:"gray",
    })
    const changeTheme = ()=>{
        setTheme({
            color:"blue"
        });
    }
    return(<div>
        <button type={"button"} onClick={changeTheme}>Change theme</button>
        <ThemeContext.Provider value={theme}>
            <GrandParent/>
        </ThemeContext.Provider>

    </div>);
}