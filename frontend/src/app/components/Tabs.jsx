'use client';
import  './tab.css';
import {useState} from "react";

function TabHeader({header,onClick,isActive}) {

    let className = "tab-header";
    if(isActive) {
        className += " active";
    }
    return <div
        className={className}
        onClick={onClick}>
        {header}
    </div>;
}

function TabBody({content}) {
    return <div className={"tab-content"}>
        {content}

    </div>;
}

export default function Tabs({headers,children})
{
    const [activeIndex, setActiveIndex] = useState(0);
    console.log('Headers ',headers);
    const tabHeaderClick = (index) => {
        setActiveIndex(index);
    }
    return(<div>
        {
            headers.map((header, index) => (<TabHeader key={index}
                                                       isActive={activeIndex === index}
                                                       onClick={() => tabHeaderClick(index)}
                                                       header={header}/>))

        }
        <TabBody content={children[activeIndex]}/>
    </div>)
}