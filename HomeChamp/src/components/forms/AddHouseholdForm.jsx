import { useEffect, useState } from "react";
import Household from "../Household";
import '../../styles/AddHouseholdForm.css';

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
                <h3>Add a Household</h3>

<div className="cream-box"> {/* Apply CSS class for cream-colored box */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="household-name">Household Name:</label>
                <input
                    type="text"
                    id="household-name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Enter name of household"
                    className="input-field" // Apply CSS class for input field styling
                />
                <input type="submit" value="Add household" className="submit-btn" /> {/* Apply CSS class for submit button styling */}
            </form>
        </div>

        </>
       
        
    )
}

export default AddHouseholdForm;