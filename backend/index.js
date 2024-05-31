const express = require("express")
const Zod = require("zod")
const {createTodoSchema} = require("./types.js")
const {mardownTodoSchema} = require("./types.js")
const { todoModel} = require("./db.js")
const cors = require("cors")


const app = express();
app.use(cors());
const port = 3000;

app.use(express.json());

app.post('/todo', async (req,res)=>{
    const payload = req.body;
    const parsedPayload = createTodoSchema.safeParse(payload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg : "invalid input"
        })
        
        return;
    }

    const todo = await todoModel.create({
        title : payload.title,
        description : payload.description,
        completed : false
    })

    console.log(todo)

    todo.save();

    res.json("todo created")


});

app.get('/todos', async (req,res)=>{
    const allTodos = await todoModel.find({});
    // console.log(allTodos)

    res.json({
        allTodos
    })

})

app.put('/completed', async (req,res)=>{
    const payload = req.body;
    const parsedPayload = createTodoSchema.safeParse(payload);

    if(!parsedPayload.success){
        res.status(411).json({
            msg : "invalid input"
        })
        
        return;
    }

    console.log(req.body._id)

    await todoModel.updateOne({
        _id : req.body._id
    }, {
        completed : true
    }) 

    res.json({
        msg : "marked as complete"
    })
   

});







app.get('/',(req,res)=>{
    res.send("he");
});

app.listen(port, ()=>{
    console.log(`ruuning on port ${port}`);
})