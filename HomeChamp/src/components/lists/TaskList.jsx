import Task from "../Task"

const TaskList = ({taskData}) => {

    const taskComponents = taskData.map( (task) => {
        return(
            <Task task ={task} key ={task.id}></Task>
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