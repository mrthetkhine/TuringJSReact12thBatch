const mongoose = require('mongoose')
const { Schema } = mongoose;

const todoSchema = new Schema({
    title:{
        type:String,
        required:true
    },
    completed:Boolean,
})
const Todo = mongoose.model('Todo', todoSchema);
module.exports= Todo;