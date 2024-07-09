import User from "../User"

const UserList = ({userData}) => {

const userComponents = userData.map( (user) => {
        return(
                <User user ={user} key={user.id}></User>
        )
}

)
        return(
        <>

                <h2>This is the UserList</h2>
                {userComponents}

        </>
)

}

export default UserList;