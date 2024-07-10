import Task from "../components/Task";
import AddTaskForm from "../components/forms/AddTaskForm";
import TaskList from "../components/lists/TaskList";

const TaskContainer = ({taskData, categoryData}) => {






    return(
        <>
        <h2>This is TaskContainer</h2>
        <AddTaskForm categoryData={categoryData} ></AddTaskForm>
        <TaskList taskData={taskData}></TaskList>
        </>
    )
}

export default TaskContainer;