'use client';
function Child1()
{
    const handler =(event)=>{
        console.log('Child1 handler ');
        event.stopPropagation();
    }
    return(<div onClick={handler}>
        <h3>Child1 </h3>
    </div>);
}
export default function PropagationDemo()
{
    const parentHandler = ()=>{
        console.log('Parent handler');
    };
    const rightClickHandler = (event)=>{
        console.log('Right click handler');
        event.preventDefault();
    }
    return(<div onClick={parentHandler} onContextMenu={rightClickHandler}>
        <h3>Parent</h3>
        <Child1/>
    </div>);
}