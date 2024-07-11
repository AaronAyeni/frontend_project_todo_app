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

                {userComponents}

        </>
)

}

export default UserList;