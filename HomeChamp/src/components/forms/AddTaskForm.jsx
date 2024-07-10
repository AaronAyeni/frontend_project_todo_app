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
        <h2>This is a task form</h2> 
         <form onSubmit={handleSubmit}>
            
            <label> description:</label>

            <input type = "text"  onChange={(event) => setDescription(event.target.value)} placeholder="Enter name of description"></input>
            <input type = "date"  onChange={(event) => setDuedate(event.target.value)} placeholder="Enter name of date of format YYYY-MM-DD"></input>
           
            <select defaultValue = "catergory" value = {category} onChange = {(event) => setCategory(event.target.value)}>
                <option disabled-value = "select-catergory">Choose a Catergory</option>
                {preferenceOptions}
            </select>
            <select defaultValue = "select-household" value = {householdId} onChange = {(event) => setHouseholdId(event.target.value)}>
                <option disabled-value = "select-household">Choose a household</option>
                {householdOptions}
            </select>

            <select defaultValue = "select-status" value = {status} onChange = {(event) => setStatus(event.target.value)}>
                <option disabled-value = "select-status">Choose a status</option>
                <option value = {status}>NOT_STARTED</option>
                <option value = {status}>IN_PROGRESS</option>
                <option value = {status}>COMPLETED</option>
                
            </select>
            


            <select defaultValue = "select-user" onChange = {(event) => setUserId(event.target.value)}>
                <option disabled-value = "select-user">Choose a user</option>
                { householdUsers.map((user) => {
        return <option key = {user.id} value = {user.id}>{user.name}</option>
    })}
            </select>


           
            <input type="submit" value = "Add Task"/> 

          </form>
        </>
    )
}

export default AddTaskForm;