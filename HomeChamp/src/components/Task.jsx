import { useEffect, useState } from "react";

const Task = ({task,updateStatus, deleteTask,patchTask, householdData}) => {

 console.log("this is task",task);


  
   
    // const toggleStatus = () => { setStatus((prevStatus) => { switch (prevStatus) { case 'NOT_COMPLETED': return 'IN_PROGRESS'; case 'IN_PROGRESS': return 'COMPLETED'; case 'COMPLETED': default: return 'NOT_COMPLETED'; } });
  const [status,setStatus] = useState(null);
  const [userId,setUserId] = useState(null);

  const [searchDescription,setSearchDescription] = useState("");



  const description = task.description;
  const category = task.category;
  const dueDate = task.dueDate;
  const householdId = task.household.id;
  const id = task.id
  
  // const userId = task.user; //add the .id after
  

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
    console.log("this is householdId",householdId);
    // console.log("this is household data in task component",householdData);
    const houseHoldWeWant = householdData.find((household) => household.id === householdId);
   //below is a guard clause so once we have the data itll will activate the true return which causes the re render.
    if(houseHoldWeWant === undefined){
      return <></>
    }
    
    return houseHoldWeWant.users.map((user) => {
      return <option key = {user.id} value = {user.id}>{user.name}</option>
  })
    
  
    
   
   
  
}


// useEffect(

//   assignUserOptions,[]
// );



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


          <form onSubmit={handleSubmitPatchTask}> 
          <select onChange = {(event) => setUserId(event.target.value)}>
          <option disabled-value = "select-user" value = {userId} >Choose a user to assign the task to</option>
                <option>Choose a user</option>
                {assignUserOptions()}
                
                
          </select>
          <input type="submit" value = "Choose status"/> 
          </form>



          <button onClick={handleButtonClick}>Delete</button>


        </ul>
        </>
    )
}

export default Task;