interface TodoModel{
    id:string;
    title: string;
    competed?: boolean;
}
let todo:TodoModel = {
    id: "1",
    title: "Learn TypeScript",
    competed: false
};
console.log('Todo:', todo);

todo = {
    id: "2",
    title: "Practice TypeScript"
}
console.log('Todo:', todo);