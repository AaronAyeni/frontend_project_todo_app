import Household from "../components/Household";
import AddHouseholdForm from "../components/forms/AddHouseholdForm";
import HouseholdList from "../components/lists/HouseholdList";

const HouseHoldContainer = ({householdData, postHousehold}) => {







    return(

        <>
        <h2>This is Household container</h2>

       <AddHouseholdForm householdData={householdData} postHousehold ={postHousehold}></AddHouseholdForm>
       <HouseholdList householdData={householdData}></HouseholdList>
        </>
        
    )
}

export default HouseHoldContainer;