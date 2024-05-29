const mongoose = require("mongoose")
const { string, boolean } = require("zod")

mongoose.connect('mongodb+srv://baladitya:bala1014@cluster0.jkch7vz.mongodb.net/Todo')

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
})
const todoModel = mongoose.model('todos',todoSchema);


module.exports = {
    todoModel
}