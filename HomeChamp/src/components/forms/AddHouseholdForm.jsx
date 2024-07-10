import { useEffect, useState } from "react";
import Household from "../Household";

const AddHouseholdForm = ({householdData, postHousehold}) => {

    const [name,setName]  = useState("");


    const handleSubmit = (event) => {
        console.log("is the form submitting")
        event.preventDefault();
        const newHousehold = {
            name
    
        }
        postHousehold(newHousehold);
    
    }


    return(
        <>
         <h2>This is a household form</h2>

         <form onSubmit={handleSubmit}>
         <label> name:</label>
         <input type = "text"  value = {name} onChange={(event) => setName(event.target.value)} placeholder="Enter name of household"></input>
         <input type="submit" value = "Add household"/>
         </form>
        
        </>
       
        
    )
}

export default AddHouseholdForm;