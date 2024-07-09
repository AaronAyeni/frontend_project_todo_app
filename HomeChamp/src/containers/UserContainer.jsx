import User from "../components/User";
import AddUserForm from "../components/forms/AddUserForm";
import UserList from "../components/lists/UserList";

const UserContainer = ({userData}) => {

    return(
        <>

        <h2>This is UserContainer</h2>
        
        <AddUserForm></AddUserForm>
        <UserList userData ={userData}></UserList>


        </>
    )
} 

export default UserContainer;