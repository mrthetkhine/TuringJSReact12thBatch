import  './bordered.css';
export default function Bordered({children})
{
    return (<div className={"bordered"}>
        {children}
    </div>);
}