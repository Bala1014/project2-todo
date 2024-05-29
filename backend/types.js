const Zod = require("zod");


const createTodoSchema = Zod.object({
    title : Zod.string(),
    description : Zod.string()

})

const markdoneTodoSchema = Zod.object({
    id : Zod.string()
})


module.exports = {
    createTodoSchema,
    markdoneTodoSchema
}