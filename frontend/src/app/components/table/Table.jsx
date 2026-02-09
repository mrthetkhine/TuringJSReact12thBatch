'use client';
import './Table.css';
import {useState} from "react";
export function TableHead({children})
{
    return (<thead>
    {children}
    </thead>);
}
export function TableRow({children})
{
    return (<tr>
        {children}
    </tr>);
}
function NoneditableCell({children,component,...props})
{
    const TagName = component === 'th' ? 'th' : 'td';
    return(<TagName {...props}>
        {children}
    </TagName>);
}
function EditableCell({data,component,onUpdate,...props})
{
    const [value,setValue] = useState(data);
    const [editing, setEditing] = useState(false);

    const TagName = component === 'th' ? 'th' : 'td';
    const onDoubleClickHandler = ()=>{
        console.log('Double click');
        setEditing(true);
    }
    const handleKeyDown = (event) => {
        console.log('Data update ',value);
        onUpdate(value);
        // Check if the pressed key is "Enter"
        if (event.key === 'Enter') {
           setEditing(false);
        }

    };
    return(<TagName {...props} onDoubleClick={onDoubleClickHandler}>
        { !editing && value}
        {
            editing && <input type={"text"} value={value}
                              onChange={(e) => setValue(e.target.value)}
                              onKeyDown={handleKeyDown}/>
        }
    </TagName>);

}
export function TableCell({children,component,editable,onUpdate,...props})
{
    if(!editable)
    {
        return (<NoneditableCell component={component} {...props}  >
            {children}
            </NoneditableCell>);
    }
    else
    {
        return(<EditableCell component={component} onUpdate={onUpdate} {...props} data={children}>

        </EditableCell>)
    }

}
export function TableBody({children})
{
    return (<tbody>
        {children}
    </tbody>);
}
export default function Table({children,...props})
{
    return (<table {...props} className={'cus-table'}>
        {children}
    </table>);
}