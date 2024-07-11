import '/src/styles/User.css'

const User = ({user}) => {


    return(
        <>

    <div className="user-container">
      <div><strong>Name:</strong> {user.name}</div>
      <div><strong>Age:</strong> {user.age}</div>
      <div><strong>Preference:</strong> {user.preference}</div>
      <div><strong>Household:</strong> {user.household.name}</div>
    </div>

        </>
        
    )
}

export default User;