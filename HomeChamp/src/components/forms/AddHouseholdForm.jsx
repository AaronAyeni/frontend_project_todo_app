import { useEffect, useState } from "react";
import Household from "../Household";

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
         

         <form onSubmit={handleSubmit}>
         <label> name:</label>
         <input type = "text"  value = {name} onChange={(event) => setName(event.target.value)} placeholder="Enter name of household"></input>
         <input type="submit" value = "Add household"/>
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
        
        </>
       
        
    );
};

export default AddHouseholdForm;