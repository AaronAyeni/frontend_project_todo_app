import Household from "../components/Household";
import AddHouseholdForm from "../components/forms/AddHouseholdForm";
import HouseholdList from "../components/lists/HouseholdList";

const HouseHoldContainer = ({householdData, postHousehold}) => {







    return(

        <>

       <AddHouseholdForm householdData={householdData} postHousehold ={postHousehold}></AddHouseholdForm>
       <HouseholdList householdData={householdData}></HouseholdList>
        </>
        
    )
}

export default HouseHoldContainer;