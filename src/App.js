
import React,{useState} from 'react';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    // Initial state for tasks
    // tasks includes all the code below
    // setTasks is the function to update this list
    {name: "Cook dinner", priority: "High", isComplete: false},
    {name: "Wash clothes", priority: "Low", isComplete: true},
    {name: "Budget", priority: "High", isComplete: false}
  ]);

  const [taskName, setTaskName] = useState("");

  const [priority, setPriority] = useState("");

  const completeTask = ( (index) => {
    const copyTasks = [...tasks];
    copyTasks[index].isComplete = true;
    setTasks(copyTasks);
  });
  
  const allTasks = tasks.map((item, index) => { 
    return(
        <li key={index} className={item.isComplete ? "complete" : "notComplete"}>
        {item.priority === "High" ? <span id="high-priority">{item.priority} priority</span> : <span id="low-priority">{item.priority} priority</span>} 
        <span>{item.name}</span>
        {item.isComplete? <span className="spanComplete">Complete!</span> : <button onClick = {() => completeTask(index)}> Mark as completed </button>}
        </li>
    )
  });

  const saveNewTask = (event) => {
    // Will update the tasks variable
    event.preventDefault();
  
    const copyTasks = [...tasks];
    copyTasks.push({name:taskName, priority: priority});
    setTasks(copyTasks);
    setTaskName("");
  }

  const handleTaskInput = (event) => {
    setTaskName(event.target.value);
  }

  const handlePriorityInput = (event) => {
    setPriority(event.target.value)
  }
  
  return (
    <>
      <h1>ToDo's</h1>

      <form onSubmit={saveNewTask}>
        <input id="new-task" type="text" placeholder = "Enter a task" value = {taskName} onChange = {handleTaskInput} required/>

        <label id="select-priority"> Select priority: </label>
        <input type="radio" id="high" name="priority" value="High" onChange = {handlePriorityInput} required/>
        <label htmlFor="high">High</label>

        <input type="radio" id="low" name="priority" value="Low" onChange = {handlePriorityInput} required/>
        <label htmlFor="low">Low</label>

        <input type="submit" value="Save Item" />
      </form>

      <hr></hr>

      <ul>
        {allTasks}
      </ul>

    </>
  );
}

export default App;