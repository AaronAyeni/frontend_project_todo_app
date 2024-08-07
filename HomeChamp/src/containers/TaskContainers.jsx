import { useEffect,useState } from "react";
import Task from "../components/Task";
import AddTaskForm from "../components/forms/AddTaskForm";
import TaskList from "../components/lists/TaskList";
const TaskContainer = ({taskData, categoryData,householdData,userData,postTask,updateStatus, deleteTask,patchTask}) => {
        const [filteredTasks,setFilteredTasks] = useState(taskData);
        console.log("this is filtered tasks",filteredTasks);
        useEffect(() => {
            setFilteredTasks(taskData);
        },[taskData]);
        const onTaskFilterChange = (searchTermTask,propertyOfTask) => {
            switch(propertyOfTask){
            case "description":
               setFilteredTasks(taskData.filter(task => task.description.toLowerCase().includes(searchTermTask.toLowerCase())))
            break;
            case "category":
                setFilteredTasks(taskData.filter(task => task.category.toLowerCase().includes(searchTermTask.toLowerCase())))
            break;
            case "status":
                setFilteredTasks(taskData.filter(task => task.status.toLowerCase().includes(searchTermTask.toLowerCase())))
            break;
            case "household":
                setFilteredTasks(taskData.filter(task => task.household.name.toLowerCase().includes(searchTermTask.toLowerCase())))
            break;
            case "dueDate":
                setFilteredTasks(taskData.filter(task => task.dueDate.includes(searchTermTask)))
            break;
            case "user":
                setFilteredTasks(taskData.filter(task =>  task.user != null ? task.user.name.toLowerCase().includes(searchTermTask.toLowerCase())  : false || searchTermTask == "" ? taskData.filter(task => task):false))
            break;
            }
        }
     
    return(
        <>
        <AddTaskForm categoryData={categoryData} householdData = {householdData} userData ={userData} postTask = {postTask} onFilterChange ={onTaskFilterChange}></AddTaskForm>
        <TaskList taskData={filteredTasks} updateStatus = {updateStatus} deleteTask ={deleteTask} patchTask = {patchTask} householdData = {householdData}></TaskList>
        </>
    )
}
export default TaskContainer;









