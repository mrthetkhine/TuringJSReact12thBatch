'use client';
interface Todo{
    id: number;
    title: string;
}
interface TodoListProps{
    todos:Todo[];
}
function TodoList({todos}: TodoListProps)
{
    return (<div>
        {
            todos.map(todo=><div key={todo.id}>
                {
                    todo.title
                }</div>)
        }
    </div>);
}
const initData: Todo[] = [
    {
        id:1,
        title: 'Task 1',
    },
    {
        id:2,
        title: 'Task 2',
    },
]
export default function ListTodo()
{
    return(<div>
        <TodoList todos={initData}/>
    </div>);
}