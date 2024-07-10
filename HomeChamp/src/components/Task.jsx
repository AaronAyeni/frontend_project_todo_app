const Task = ({task}) => {


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


        </ul>
        </>
    )
}

export default Task;