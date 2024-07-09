const User = ({userData}) => {


    return(
        <>
        <h3>This is a user component</h3>
        <p> {userData[0].name}</p>
        </>
        
    )
}

export default User;