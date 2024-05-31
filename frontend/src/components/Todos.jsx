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
                    <button onClick={()=>{
                        fetch("http://localhost:3000/completed", {
                            method : "PUT",
                            body : JSON.stringify({
                                _id : todo._id
                            }),
                            headers : {
                                "Content-type" : "application/json"
                            }
                        })

                    }}>{todo.completed==true?"completed":"mark as complete"}</button>
                </div>
            )
        })
        }
        
    </div>
    )
}