import { useEffect, useState } from "react";
import Task from "../Task";

const AddTaskForm = ({taskData, categoryData}) => {


const [description,setdescription]  = useState("");
const [householdName,setHouseholdName] = useState(null); 
const [dueDate,setDuedate] = useState(0);
const [category,setCategory] = useState(null); 
const [status,setStatus] = useState(null); 
const [userName,setuserName] = useState(null); 


const handleSubmit = (event) => {
    console.log("is the form submitting")
    event.preventDefault();
    const newTask = {
        description,
        householdName,
        dueDate,
        category,
        status,
        userName


    }
    postUser(newTask);

}


const preferenceOptions = (categoryData.map((preference,i)=>{
    return <option key = {i}> {preference} </option>
}));


    return(

        <>
        <h2>This is a task form</h2> 
        <form onSubmit={handleSubmit}>
            
            <label> description:</label>

            <input type = "text"  onChange={(event) => setName(event.target.value)} placeholder="Enter name of description"></input>
           
            <select defaultValue = "catergory" onChange = {(event) => setCategory(event.target.value)}>
                <option disabled-value = "select-catergory">Choose a Catergory</option>
                {preferenceOptions}
            </select>


            <select defaultValue = "select-preference" onChange = {(event) => setPreference(event.target.value)}>
                <option disabled-value = "select-preference">Choose a preference</option>
                {preferenceOptions}
            </select>


            <select defaultValue = "select-preference" onChange = {(event) => setPreference(event.target.value)}>
                <option disabled-value = "select-preference">Choose a preference</option>
                {preferenceOptions}
            </select>
            <select defaultValue = "select-household" onChange = {(event) => setHouseholdId(event.target.value)}>
                <option disabled-value = "select-household">Choose a household</option>
                {householdOptions}
            </select>
            <input type="submit" value = "Add Task"/> 

          </form>
        </>
    )
}

export default AddTaskForm;