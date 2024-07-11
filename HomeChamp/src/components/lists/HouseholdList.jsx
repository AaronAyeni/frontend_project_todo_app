import Household from "../Household"

const HouseholdList = ({householdData}) => {

const householdComponents = householdData.map( (household) => {
    return( <Household household ={household} key ={household.id}></Household>
    )
})    


    return(
        <>
        {householdComponents} 
        </>
    )
}

export default HouseholdList;