import { useState } from "react";

const Task = ({task,updateStatus}) => {

  console.log(task);

  
   
    // const toggleStatus = () => { setStatus((prevStatus) => { switch (prevStatus) { case 'NOT_COMPLETED': return 'IN_PROGRESS'; case 'IN_PROGRESS': return 'COMPLETED'; case 'COMPLETED': default: return 'NOT_COMPLETED'; } });
  const [status,setStatus] = useState(null);

  const description = task.description;
  const category = task.category;
  const dueDate = task.dueDate;
  const householdId = task.household.id;
  const id = task.id




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
        <h4>This is a task component</h4>
        <ul>
          <li>{task.description}</li>
          <li>{task.household.name}</li>
          <li>{task.dueDate}</li>
          <li>{task.category}</li>
          <li>{task.status}</li>
          <li>{task.user == null ? "no user associated with task" : task.user.name} </li>  
          
          <form onSubmit={handleSubmit}> 
          <select onChange = {(event) => setStatus(event.target.value)}>
          <option disabled-value = "select-status" value = {status} >Choose a status</option>
                <option>NOT_STARTED</option>
                <option>IN_PROGRESS</option>
                <option>COMPLETED</option>
                
          </select>
          <input type="submit" value = "Choose status"/> 
          </form>

        </ul>
        </>
    )
}

export default Task;