import User from "../components/User";
import AddUserForm from "../components/forms/AddUserForm";

const UserContainer = (props) => {

    return(
        <>

        <h2>This is UserContainer</h2>
        
        <AddUserForm userData = {props}></AddUserForm>

            
        </>
    )
} 

export default UserContainer;