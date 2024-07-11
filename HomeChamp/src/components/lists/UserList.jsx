import User from "../User"
import '/src/styles/UserList.css';


const UserList = ({userData}) => {

const userComponents = userData.map( (user) => {
        return(
                <User user ={user} key={user.id}></User>
        )
}

)
        return(
        <section id="usersection">

                {userComponents}

        </section>
)

}

export default UserList;