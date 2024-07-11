import { useEffect, useState } from "react";
import '/src/styles/AddTaskForm.css';

import Task from "../Task";
const AddTaskForm = ({taskData, categoryData,householdData,userData,postTask,onFilterChange}) => {
const [description,setDescription]  = useState("");
const [householdId,setHouseholdId] = useState(null);
const [dueDate,setDuedate] = useState(0);
const [category,setCategory] = useState(null);
const [status,setStatus] = useState(null);
const [userId,setUserId] = useState(null);
const [householdUsers, setHouseholdUsers] = useState([]);
const [descriptionSearchTerm,setDescriptionSeachTerm] = useState("");
const [categorySearchTerm,setCategorySeachTerm] = useState("");
const [statusSearchTerm,setStatusSearchTerm] = useState("");
const [householdSearchTerm,setHouseholdSearchTerm] = useState("");
const [dueDateSearchTerm,setDueDateSearchTerm] = useState(null);
const [assignedUserSearchTerm,setAssignedUserSearchTerm] = useState("");
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
const handleDescriptionFilterChange = (event) => {
    const term = event.target.value.toLowerCase();
    setDescriptionSeachTerm(term);
    onFilterChange(term,"description");
};
const handleCategoryFilterChange = (event) => {
    const term = event.target.value.toLowerCase();
    setCategorySeachTerm(term);
    onFilterChange(term,"category");
}
const handleStatusFilterChange = (event) => {
    const term = event.target.value.toLowerCase();
    setStatusSearchTerm(term);
    onFilterChange(term,"status");
}
const handleHouseholdFilterChange = (event) => {
    const term = event.target.value.toLowerCase();
    setHouseholdSearchTerm(term);
    onFilterChange(term,"household")
}
const handleDueDateFilterChange = (event) => {
    const term = event.target.value;
    setDueDateSearchTerm(term);
    onFilterChange(term,"dueDate")
}
const handleUserFilterChange = (event) => {
    const term = event.target.value;
    setAssignedUserSearchTerm(term);
    onFilterChange(term,"user")
}
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
               

            <h3>Add a Task</h3>

            <div className="cream-box">

         <form onSubmit={handleSubmit}>
            <label> Description:</label>
            <input type = "text"  onChange={(event) => setDescription(event.target.value)} placeholder="Enter name of description" className="input-field"></input>
            <label> Deadline:</label>
            <input type = "date"  onChange={(event) => setDuedate(event.target.value)} placeholder="Enter name of date of format YYYY-MM-DD" className="input-field"></input>
            <label> Category:</label>
            <select defaultValue = "catergory" value = {category} onChange = {(event) => setCategory(event.target.value)} className="select-field">
                <option disabled-value = "select-catergory">Choose a Catergory</option>
                {preferenceOptions}
            </select>
            <label> Household:</label>
            <select defaultValue = "select-household" value = {householdId} onChange = {(event) => setHouseholdId(event.target.value)}  className="select-field">
                <option disabled-value = "select-household">Choose a household</option>
                {householdOptions}
            </select>
            <label> Status:</label>
            <select defaultValue = "select-status" value = {status} onChange = {(event) => setStatus(event.target.value)}  className="select-field">
                <option disabled-value = "select-status">Choose a status</option>
                <option value = {status}>NOT_STARTED</option>
                <option value = {status}>IN_PROGRESS</option>
                <option value = {status}>COMPLETED</option>
            </select>
            <label> Assign to:</label>
            <select defaultValue = "select-user" onChange = {(event) => setUserId(event.target.value)} className="select-field">
                <option disabled-value = "select-user">Choose a user</option>
                { householdUsers.map((user) => {
        return <option key = {user.id} value = {user.id}>{user.name}</option>
    })}
            </select>
            <input type="submit" value = "Add Task" className="purple-button"/>
          </form>
          </div>


          <h3>Filter a Task</h3>

<div className="cream-box">
    <label>Filter by Description:</label>
    <input
        type="text"
        value={descriptionSearchTerm}
        onChange={handleDescriptionFilterChange}
        placeholder="Search description"
        className="input-field"
    />
     <label>Filter by Category:</label>
    <input
        type="text"
        value={categorySearchTerm}
        onChange={handleCategoryFilterChange}
        placeholder="Search category"
        className="input-field"
    />
    <label>Filter by Status:</label>
    <input
        type="text"
        value={statusSearchTerm}
        onChange={handleStatusFilterChange}
        placeholder="Search status"
        className="input-field"
    />
    <label>Filter by Household:</label>
    <input
        type="text"
        value={householdSearchTerm}
        onChange={handleHouseholdFilterChange}
        placeholder="Search household"
        className="input-field"
    />
    <label>Filter by Deadline:</label>
    <input
        type="text"
        value={dueDateSearchTerm}
        onChange={handleDueDateFilterChange}
        placeholder="YYYY-MM-DD"
        className="input-field"
    />
    <label>Filter by User</label>
    <input
        type="text"
        value={assignedUserSearchTerm}
        onChange={handleUserFilterChange}
        placeholder="Search by User"
        className="input-field"
    />
</div>

        </>
    )
}
export default AddTaskForm;
















