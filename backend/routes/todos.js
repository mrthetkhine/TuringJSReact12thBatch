const express = require('express');
const TodoController = require('../controllers/TodoController');
const router = express.Router();

router.get('/',TodoController.getAllTodos);
router.get('/:id', TodoController.getById);
router.post('/', TodoController.saveTodo)
router.put('/:id', TodoController.updateTodo);
router.delete('/:id', TodoController.deleteTodo);

module.exports = router;