import { useEffect, useState } from "react";
import User from "../User";
import '/src/styles/AddUserForm.css';


const AddUserForm = ({userData, categoryData, householdData,postUser}) => {

const [name,setName]  = useState("");
const [age,setAge] = useState(0);
const [preference,setPreference] = useState(null);
const [householdId,setHouseholdId] = useState(null); 




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


const preferenceOptions = (categoryData.map((preference,i)=>{
    return <option key = {i}> {preference} </option>
}));


const householdOptions = householdData.map((household) => {
    return <option key={household.id} value = {household.id}>{household.name}</option>
});




    return(
        <>
        <h3>Add a User</h3>

    <div className="cream-box">

            <form onSubmit={handleSubmit}>
                <label> Name:</label>
                <input
                    type="text"
                    id="name"
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter name of user"
                    className="input-field"
                />
                <label> Age:</label>
                <input
                    type="number"
                    id="age"
                    onChange={(event) => setAge(event.target.value)}
                    placeholder="Enter age of user"
                    className="input-field"
                />
                <label> Preferences:</label>
                <select
                    defaultValue="select-preference"
                    onChange={(event) => setPreference(event.target.value)}
                    className="select-field"
                >
                    <option disabled value="select-preference">
                        Choose a preference
                    </option>
                    {preferenceOptions}
                </select>
                <label> Household:</label>
                <select
                    defaultValue="select-household"
                    onChange={(event) => setHouseholdId(event.target.value)}
                    className="select-field"
                >
                    <option disabled value="select-household">
                        Choose a household
                    </option>
                    {householdOptions}
                </select>
                <input type="submit" value="Add User" className="submit-btn" />
            </form>
        </div>
            

        






        </>
    )
}

export default AddUserForm;