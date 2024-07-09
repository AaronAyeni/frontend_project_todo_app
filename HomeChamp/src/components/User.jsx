const User = ({user}) => {


    return(
        <>
        <h3>This is a user component</h3>
        <ul>
        <li>{user.name}</li>
        <li>{user.age}</li>
        <li>{user.preference}</li>
        <li>{user.household.name}</li>
        </ul>
        </>
        
    )
}

export default User;