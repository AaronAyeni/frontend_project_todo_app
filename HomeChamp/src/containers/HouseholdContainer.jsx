import { useState, useEffect } from "react";
import Household from "../components/Household";
import AddHouseholdForm from "../components/forms/AddHouseholdForm";
import HouseholdList from "../components/lists/HouseholdList";

const HouseHoldContainer = ({householdData, postHousehold}) => {

    const [filteredHouseholds, setFilteredHouseholds] = useState(householdData);

    useEffect(() => {
        setFilteredHouseholds(householdData);
    }, [householdData]);

    const handleFilterChange = (searchTerm) => {
        const filtered = householdData.filter(household =>
            household.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredHouseholds(filtered);
    };

    return(

        <>
       <AddHouseholdForm householdData={householdData} postHousehold ={postHousehold} onFilterChange={handleFilterChange} ></AddHouseholdForm>
       <HouseholdList householdData={filteredHouseholds}></HouseholdList>
        </>
        
    )
}

export default HouseHoldContainer;