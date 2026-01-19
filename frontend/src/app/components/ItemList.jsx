function returnNothing()
{
    return null;
}
export default function ItemList() {
    let items= ['Apple','Orange','Banana'];

    return (<div>
        <ol>
        {
            items.map((item,index) => <li key={index}>
                {item}
            </li>)
        }
        {
            returnNothing()+''
        }
        </ol>
    </div>)
}