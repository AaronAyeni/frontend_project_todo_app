import { useEffect, useState } from "react";
import Task from "../Task";


const AddTaskForm = ({taskData, categoryData,householdData,userData,postTask}) => {


const [description,setDescription]  = useState("");
const [householdId,setHouseholdId] = useState(null); 
const [dueDate,setDuedate] = useState(0);
const [category,setCategory] = useState(null); 
const [status,setStatus] = useState(null); 
const [userId,setUserId] = useState(null); 

const [householdUsers, setHouseholdUsers] = useState([]);



const handleSubmit = (event) => {
    console.log("is the form submitting")
    event.preventDefault();
    const newTask = {
        description,
        householdId,
        dueDate,
        category,
        status,
        userId


    }
    postTask(newTask);

}


const preferenceOptions = (categoryData.map((preference,i)=>{
    return <option key = {i}> {preference} </option>
}));

const householdOptions = householdData.map((household) => {
    return <option key={household.id} value = {household.id}>{household.name}</option>
});





const assignUserOptions = () => {
    const houseObject = householdData.find(household => household.id == householdId);
    if(houseObject){

    
    const userArray = houseObject.users;
    setHouseholdUsers(userArray); 
    }
}


useEffect(
    assignUserOptions,[householdId]
);




    return(

        <>
          <div className="cream-box">
            <form onSubmit={handleSubmit}>
                <label> Description:</label>
                <input
                    type="text"
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Enter description"
                    className="input-field"
                />
                <label> Deadline:</label>
                <input
                    type="date"
                    onChange={(event) => setDueDate(event.target.value)}
                    placeholder="Enter deadline (YYYY-MM-DD)"
                    className="input-field"
                />
                <label> Category:</label>
                <select
                    defaultValue="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="select-field"
                >
                    <option disabled value="select-category">
                        Choose a Category
                    </option>
                    {preferenceOptions}
                </select>
                <label> Household:</label>
                <select
                    defaultValue="select-household"
                    value={householdId}
                    onChange={(event) => setHouseholdId(event.target.value)}
                    className="select-field"
                >
                    <option disabled value="select-household">
                        Choose a Household
                    </option>
                    {householdOptions}
                </select>
                <label> Status:</label>
                <select
                    defaultValue="select-status"
                    value={status}
                    onChange={(event) => setStatus(event.target.value)}
                    className="select-field"
                >
                    <option disabled value="select-status">
                        Choose a Status
                    </option>
                    <option value="NOT_STARTED">NOT_STARTED</option>
                    <option value="IN_PROGRESS">IN_PROGRESS</option>
                    <option value="COMPLETED">COMPLETED</option>
                </select>
                <label> Assign to:</label>
                <select
                    defaultValue="select-user"
                    onChange={(event) => setUserId(event.target.value)}
                    className="select-field"
                >
                    <option disabled value="select-user">
                        Choose a User
                    </option>
                    {householdUsers.map((user) => (
                        <option key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>
                <input type="submit" value="Add Task" className="submit-btn" />
            </form>
        </div>
        </>
    )
}

export default AddTaskForm;