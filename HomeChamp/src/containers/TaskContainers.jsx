import Task from "../components/Task";
import AddTaskForm from "../components/forms/AddTaskForm";
import TaskList from "../components/lists/TaskList";

const TaskContainer = ({taskData}) => {






    return(
        <>
        <h2>This is TaskContainer</h2>
        <AddTaskForm></AddTaskForm>
        <TaskList taskData={taskData}></TaskList>
        </>
    )
}

export default TaskContainer;