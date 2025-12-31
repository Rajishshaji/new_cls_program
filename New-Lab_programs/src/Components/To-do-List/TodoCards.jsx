import { useState } from "react"

function TodoCard() {
    const [task,setTask]= useState();

    return(
        <div>
            <h2>To-Do-List</h2>
            <input type="text" placeholder="Enter the Number" onKeyUp={(event)=>{setTask(event.target.value)}}/>
            <button onClick={()=>{console.log(task)}}>Add</button>
            <div>No Task Yet</div>
        </div>
    )
    
}
export default TodoCard