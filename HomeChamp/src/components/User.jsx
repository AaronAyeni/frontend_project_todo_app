const User = ({user}) => {


    return(
        <>
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