const Todo = require("../models/Todo");

async function getAllTodos()
{
    const todos =  await Todo.find();
    return todos;
}
async function getById(id) {
    let todo = await Todo.findById(id);
    //console.log('todoservice getby id ',todo);
    return todo;
}
async function saveTodo(todo) {
    let newTodo = new Todo(todo);
    newTodo = await newTodo.save();
    return newTodo;
}
async function updateTodo(id,todo)
{
    let updatedTodo = await Todo.findByIdAndUpdate(id,todo,{
        new: true
    });
    return updatedTodo;
}
async function deleteTodo(id)
{
    let deletedTodo = await Todo.findByIdAndDelete(id);
    return deletedTodo;
}
module.exports = {
    getAllTodos,
    getById,
    saveTodo,
    updateTodo,
    deleteTodo,
}