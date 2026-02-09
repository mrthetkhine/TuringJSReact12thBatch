interface Todo {
    id:string;
    title: string;
    
}
interface Todo{
    completed: boolean;
}
let todos : Todo[] = [
    {
        id: "1",
        title: "Learn TypeScript",
        completed: false,
    },
    {
        id: "2",
        title: "Build a project",
        completed: true,
    },
];