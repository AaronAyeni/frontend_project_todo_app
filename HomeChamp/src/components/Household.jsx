const Household = ({household}) => {
console.log(household);
    return(
        <>
        <h4>This is a household component</h4>
        <ul>
            <li>{household.name}</li>
            <li>{household.users.map( (user) => {return user.name})}</li>
        </ul>
        </>
    )
}

export default Household;