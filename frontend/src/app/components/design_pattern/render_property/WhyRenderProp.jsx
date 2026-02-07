'use client';

const initItem = [
    {
        id:'1',
        title : 'Task 1',
    },
    {
        id:'2',
        title : 'Task 2',
    },
    {
        id:'3',
        title : 'Task 3',
    },
]
function TodoList({todos})
{
    return(<div>
        {
            todos.map((item) =><h1>
                {item.title}
                </h1>)
        }
    </div>);
}
export default function WhyRenderProp()
{
    return (<div>
        <TodoList todos={initItem}/>
        <hr/>
        <TodoList todos={initItem}/>
    </div>);
}