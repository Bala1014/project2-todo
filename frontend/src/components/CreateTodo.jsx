import { useState } from "react";


export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");


    return <div>
        <input type="text" placeholder="title"  onChange={(val)=>{
            setTitle(val.target.value);
        }} /> <br />
        <input type="text" placeholder="description"  onChange={(val)=>{
            setDescription(val.target.value);
        }} /> <br />

        <button onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description,
                    completed : false
                }),
                headers:{
                    "Content-type" : "application/json"
                }
            })
            // .then(async (res)=>{
            //     const json = await res.json();
                
            // })
        }}>add a todo</button>
    </div>
}