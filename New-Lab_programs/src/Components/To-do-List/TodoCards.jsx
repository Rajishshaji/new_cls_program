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


import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const addTask = () => {
    if (text === "") return;

    setTasks([...tasks, { name: text, completed: false }]);
    setText("");
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const toggleTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <h1>To Do List</h1>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />

            <span className={task.completed ? "done" : ""}>
              {task.name}
            </span>

            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
