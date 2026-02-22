export default async function TodoPage()
{
    console.log('Todo page render at server');
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let todos =await response.json();

    return(<div>
        Todo page
        {
            todos.map((td:any)=><div key={td.id}>
                {
                    td.title
                }
            </div>)
        }
    </div>);
}