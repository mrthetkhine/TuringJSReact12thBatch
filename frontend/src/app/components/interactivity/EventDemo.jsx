'use client';

function CustomButton({onClick}) {
    return <button type={"button"} onClick={onClick}>Click me</button>;
}

export default function EventDemo()
{
    const clickHandler = (event) => {
        console.log('click handler ',event);
    }
    return(<div>
        Event Demo
        <CustomButton onClick={clickHandler}/>
    </div>);
}