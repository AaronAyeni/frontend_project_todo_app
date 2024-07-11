import { useEffect, useState } from "react";
import User from "../User";

const AddUserForm = ({userData, categoryData, householdData,postUser, onFilterChange }) => {

const [name,setName]  = useState("");
const [age,setAge] = useState(0);
const [preference,setPreference] = useState(null);
const [householdId,setHouseholdId] = useState(null);
const [searchTerm, setSearchTerm] = useState(""); 




const handleSubmit = (event) => {
    console.log("is the form submitting")
    event.preventDefault();
    const newUser = {
        name,
        age,
        preference,
        householdId

    }
    postUser(newUser);

}

const handleFilterChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onFilterChange(term);
};

const preferenceOptions = (categoryData.map((preference,i)=>{
    return <option key = {i}> {preference} </option>
}));


const householdOptions = householdData.map((household) => {
    return <option key={household.id} value = {household.id}>{household.name}</option>
});

    return(
        <>
        
    
            <form onSubmit={handleSubmit}>
            
                <label> name:</label>
                <input type = "text" id = "name"  onChange={(event) => setName(event.target.value)} placeholder="Enter name of user"></input>
                <label>age:</label>
                <input type = "number" id = "age" onChange={(event) => setAge(event.target.value)}  placeholder="Enter age of user"></input>
                <label>preferences</label>
                <select defaultValue = "select-preference" onChange = {(event) => setPreference(event.target.value)}>
                    <option disabled-value = "select-preference">Choose a preference</option>
                    {preferenceOptions}
                </select>
                <select defaultValue = "select-household" onChange = {(event) => setHouseholdId(event.target.value)}>
                    <option disabled-value = "select-household">Choose a household</option>
                    {householdOptions}
                </select>
                <input type="submit" value = "Add User"/>
             </form>
             <div>
                <label>Filter by Name:</label>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleFilterChange}
                    placeholder="Search users"
                />
            </div>
        </>
    );
};

export default AddUserForm;