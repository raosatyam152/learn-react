import React, { useState } from 'react';
function ToDoList(){
    const [tasks, setTasks] = useState(["Wake Up", "Go for Walk", "learn-react"])
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("")
        }
        else{
            alert("Please enter a task");
        }

    }
    function deleteTask(index){
        setTasks(tasks.filter((task, i) => i !== index));

    }
    function moveTaskUp(index){
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index] , updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }
  
    }
    function moveTaskDown(index){
        if (index < tasks.length -1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index] , updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]]
            setTasks(updatedTasks);
        }

    }
    return (<div className="to-do-list">
                <h1>To Do List</h1>
                <div>
                    <input className="input-text" type="text" placeholder="Enter a task..."
                    value={newTask} onChange={handleInputChange}/>
                    <button className="add-btn" onClick={addTask}>Add</button>

                </div>
                <ol>
                    {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="spn-text">{task}</span>
                        <button className="btn" onClick={() => deleteTask(index)}>Delete</button>
                        <button className='Up-btn' onClick={() => moveTaskUp(index)}>⬆️</button>
                        <button className='Up-btn' onClick={() => moveTaskDown(index)}>⬇️</button>
                    </li>
                    )}
                </ol>
                <a href="/">Home</a>
            </div>
    );

}
export default ToDoList