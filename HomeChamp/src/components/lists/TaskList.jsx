import Task from "../Task"
import '/src/styles/Lists/TaskList.css';

const TaskList = ({taskData,updateStatus, deleteTask,patchTask,householdData}) => {

    const taskComponents = taskData.map( (task) => {
        return(
            <Task task ={task} updateStatus = {updateStatus} deleteTask={deleteTask} householdData = {householdData} patchTask = {patchTask} key ={task.id}></Task>
        )
    })



    return(
        <section id="tasksection" >
        {taskComponents}
        
        </section>
        
    )
}

export default TaskList;