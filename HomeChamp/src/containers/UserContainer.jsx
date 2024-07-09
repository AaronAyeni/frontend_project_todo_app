import User from "../components/User";
import AddUserForm from "../components/forms/AddUserForm";
import UserList from "../components/lists/UserList";

const UserContainer = () => {

    return(
        <>

        <h2>This is UserContainer</h2>
        
        <AddUserForm></AddUserForm>
        <UserList></UserList>

            
        </>
    )
} 

export default UserContainer;