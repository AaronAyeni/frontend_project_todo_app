import Household from "../Household"
import '/src/styles/Lists/HouseholdList.css';

const HouseholdList = ({householdData}) => {

const householdComponents = householdData.map( (household) => {
    return( <Household household ={household} key ={household.id}></Household>
    )
})    


    return(
        <section id = "householdsection">

        {householdComponents} 

        </section>
    )
}

export default HouseholdList;