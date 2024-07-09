import { useState } from "react";
import User from "../User";

const AddUserForm = ({userData}) => {

const [name,setName]  = useState("");
const [age,setAge] = useState(0);
const [preferenceId,setPreference] = useState(null);
const [householdId,setHousehold] = useState(null); //could have household state be an empty object 




const handleSubmit = (event) => {
    event.preventDefault();



}

// const preferenceOptions = (preference.map((preference)=>{
//     return <option key = {preference.id} value = {preference.id}></option>
// }));



    return(
        <>
        <h2>This is a user form </h2>
        {/* <div className="userForm">
            <form onSubmit={handleSubmit}></form>
            <div>
                <label> name:</label>
                <input type = "text" id = "name" onChange={(event) => setName(event.target.value)} placeholder="Enter name of user"></input>
                <label>age:</label>
                <input type = "number" id = "age" onChange={(event) => setAge(event.target.value)}  placeholder="Enter age of user"></input>
                <label>preferences</label>
                <select defaultValue = "select-preference" onChange = {(event) => setPreferenceId(event.target.value)}>
                    <option disabled-value = "select-preference">Choose a preference</option>
                    {preferenceOptions}
                </select>
            </div>



        </div>
 */}





        </>
    )
}

export default AddUserForm;