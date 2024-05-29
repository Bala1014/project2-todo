import { useState } from "react";

export function CreateTodo(){
    

    return <div>
        <input type="text" placeholder="title"   /> <br />
        <input type="text" placeholder="description"   /> <br />

        <button onClick={()=>{
            fetch("http://localhost:3000/todos", {
                method : "POST",
                body : {

                }
            }).then(async (res)=>{
                const json = await res.json();
                console.log(json);
                setTodos(json.allTodos)
            })
        }}>add a todo</button>
    </div>
}