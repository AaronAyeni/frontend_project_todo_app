import Task from "../Task"

const TaskList = ({taskData,updateStatus, deleteTask}) => {

    const taskComponents = taskData.map( (task) => {
        return(
            <Task task ={task} updateStatus = {updateStatus} deleteTask={deleteTask} key ={task.id}></Task>
        )
    })



    return(
        <>
        <h2>This is a task list</h2>
        {taskComponents}
        
        
        </>
    )
}

export default TaskList;