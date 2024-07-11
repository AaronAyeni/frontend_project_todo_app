import Task from "../Task"

const TaskList = ({taskData,updateStatus, deleteTask,patchTask,householdData}) => {

    const taskComponents = taskData.map( (task) => {
        return(
            <Task task ={task} updateStatus = {updateStatus} deleteTask={deleteTask} householdData = {householdData} patchTask = {patchTask} key ={task.id}></Task>
        )
    })



    return(
        <>
        {taskComponents}
        
        
        </>
    )
}

export default TaskList;