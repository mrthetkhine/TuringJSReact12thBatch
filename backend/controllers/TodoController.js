const TodoService = require("../services/TodoService");
async function getAllTodos(req,res){
    let todos = await TodoService.getAllTodos();
    res.json(todos);
}
async function getById (req, res) {
    let id = req.params.id;
    try
    {
       let todo = await TodoService.getById(id);
       res.json(todo);
    }
    catch(err){
        res.status(404).json({})
    }

}
async function saveTodo(req, res) {
    const todo = req.body;
    console.log('Save todo ',req.body);

    try
    {
        let newTodo = await TodoService.saveTodo(todo);
        res.status(201).json(newTodo);
    }
    catch(err)
    {
        //console.log('Err ',err);
        res.status(500).json({
            message: 'Error '+err.message,
        })
    }

}
async function updateTodo(req, res) {
    let id = req.params.id;
    let todo = req.body;

    try
    {
        let updatedTodo = TodoService.updateTodo(id,todo);
        res.json(updatedTodo);
    }
    catch(err)
    {
        res.status(500).json({
            message: 'Error '+err.message,
        })
    }

}
async function deleteTodo(req, res) {
    let id = req.params.id;
    try
    {
        let deletedTodo = TodoService.deleteTodo(id);
        res.json(deletedTodo);
    }
    catch(err)
    {
        res.status(500).json({
            message: 'Error '+err.message,
        })
    }

}
module.exports = {
    getAllTodos,
    getById,
    saveTodo,
    updateTodo,
    deleteTodo,
}