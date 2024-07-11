import { useEffect, useState } from "react";
import Household from "../Household";
import '../../styles/AddHouseholdForm.css';

const AddHouseholdForm = ({householdData, postHousehold, onFilterChange}) => {

    const [name,setName]  = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (event) => {
        console.log("is the form submitting")
        event.preventDefault();
        const newHousehold = { name }
        postHousehold(newHousehold);  
    };

    const handleFilterChange = (event) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);
        onFilterChange(term);
    };


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
            <div>
                <label>Filter by Name:</label>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleFilterChange}
                    placeholder="Search households"
                />
            </div>
        </div>



        </>
       
        
    );
};

export default AddHouseholdForm;