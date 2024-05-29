export function Todos({todos}){
    // console.log("reached 2")
    // console.log(todos, "reached")
    return(
    <div>
        { todos.map((todo)=>{
            return (
                <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed==true?"completed":"mark as complete"}</button>
                </div>
            )
        })
        }
        
    </div>
    )
}