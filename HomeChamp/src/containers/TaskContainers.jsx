import Task from "../components/Task";
import AddTaskForm from "../components/forms/AddTaskForm";
import TaskList from "../components/lists/TaskList";

const TaskContainer = ({taskData, categoryData,householdData,userData,postTask,updateStatus, deleteTask}) => {








    return(
        <>
        <AddTaskForm categoryData={categoryData} householdData = {householdData} userData ={userData} postTask = {postTask}></AddTaskForm>
        <TaskList taskData={taskData} updateStatus = {updateStatus} deleteTask ={deleteTask}></TaskList>
        </>
    )
}

export default TaskContainer;