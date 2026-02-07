'use client';
export default function RenderPropTodo({todos,render})
{
    return(<div>
        {
            todos.map((item) =>render(item))
        }
    </div>);
}