import Household from "../Household"

const HouseholdList = ({householdData}) => {

const householdComponents = householdData.map( (household) => {
    return(
        <Household household ={household} key ={household.id}></Household>
    )

}

)    





    return(
        <>
        <h2>This is household list</h2>
        {householdComponents}
        
        </>
    )
}

export default HouseholdList;