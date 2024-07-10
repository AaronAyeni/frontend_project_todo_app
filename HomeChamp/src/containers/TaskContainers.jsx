import Task from "../components/Task";
import AddTaskForm from "../components/forms/AddTaskForm";
import TaskList from "../components/lists/TaskList";

const TaskContainer = ({taskData, categoryData,householdData,userData,postTask,updateStatus}) => {








    return(
        <>
        <h2>This is TaskContainer</h2>
        <AddTaskForm categoryData={categoryData} householdData = {householdData} userData ={userData} postTask = {postTask}></AddTaskForm>
        <TaskList taskData={taskData} updateStatus = {updateStatus}></TaskList>
        </>
    )
}

export default TaskContainer;