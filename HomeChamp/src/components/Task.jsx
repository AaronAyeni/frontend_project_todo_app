import { useState } from "react";

import '/src/styles/Task.css'

const Task = ({task,updateStatus, deleteTask}) => {

  console.log(task);

  
   
    // const toggleStatus = () => { setStatus((prevStatus) => { switch (prevStatus) { case 'NOT_COMPLETED': return 'IN_PROGRESS'; case 'IN_PROGRESS': return 'COMPLETED'; case 'COMPLETED': default: return 'NOT_COMPLETED'; } });
  const [status,setStatus] = useState(null);

  const description = task.description;
  const category = task.category;
  const dueDate = task.dueDate;
  const householdId = task.household.id;
  const id = task.id


  const handleButtonClick = () => {
    deleteTask(task)
}

  const handleSubmit = (event) => {
    event.preventDefault()
    const newTask = {
      description,
      category,
      dueDate,
      householdId,
      status,
      id


    }
    
    updateStatus(newTask);

  }


    return(
        <>
        <div className="task-container">
      <div className="task-description">{task.description}</div>
      <div><strong>Household:</strong> {task.household.name}</div>
      <div><strong>Due Date:</strong> {task.dueDate}</div>
      <div><strong>Category:</strong> {task.category}</div>
      <div><strong>Status:</strong> {task.status}</div>
      <div><strong>User:</strong> {task.user ? task.user.name : "No user associated with task"}</div>
      
      <form onSubmit={handleSubmit}>
        <select onChange={(event) => setStatus(event.target.value)}>
          <option disabled value="select-status">Choose a status</option>
          <option>NOT_STARTED</option>
          <option>IN_PROGRESS</option>
          <option>COMPLETED</option>
        </select>
        <input type="submit" value="Choose status" />
      </form>
      
      <button onClick={handleButtonClick}>Delete</button>
    </div>
    </>
    )
}

export default Task;