export default function ItemWithFlag({flag,name})
{
    return(<div>
        {
            flag && '✅'
        }
        {name}
    </div>);
}