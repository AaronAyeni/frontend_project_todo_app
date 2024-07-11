import { useEffect, useState } from "react";


import '/src/styles/Task.css'

const Task = ({task,updateStatus, deleteTask,patchTask, householdData}) => {

 console.log("this is task",task);



  
   
   
  const [status,setStatus] = useState(null);
  const [userId,setUserId] = useState(null);

  const [searchDescription,setSearchDescription] = useState("");



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
      householdId,
      dueDate,
      category,
      status,
      userId,
      id


    }
    
    updateStatus(newTask);

  }


  const handleSubmitPatchTask = (event) => {
    event.preventDefault();
    const taskToPatch = {
      description,
      householdId,
      dueDate,
      category,
      status,
      userId,
      id



    }

    patchTask(taskToPatch);


  }

 

  const assignUserOptions = () => {
    
    const houseHoldWeWant = householdData.find((household) => household.id === householdId);
   
    if(houseHoldWeWant === undefined){
      return <></>
    }
    
    return houseHoldWeWant.users.map((user) => {
      return <option key = {user.id} value = {user.id}>{user.name}</option>
  })
    
  
    
   
   
  
}





    return(
      <article className="task-container">

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
      
        


          <form onSubmit={handleSubmitPatchTask}> 
          <select onChange = {(event) => setUserId(event.target.value)}>
          <option disabled-value = "select-user" value = {userId} >Choose a user to assign the task to</option>
                <option>Choose a user</option>
                {assignUserOptions()}
                
                
          </select>
          <input type="submit" value = "Choose status"/> 
          </form>
      <button onClick={handleButtonClick}>Delete</button>
    </div>
    </article>

    )
}

export default Task;