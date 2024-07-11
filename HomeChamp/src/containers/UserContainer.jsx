import User from "../components/User";
import AddUserForm from "../components/forms/AddUserForm";
import UserList from "../components/lists/UserList";

const UserContainer = ({userData, categoryData, householdData,postUser}) => {

    return(
        <>

        
        <AddUserForm userData={userData} categoryData ={categoryData} householdData={householdData} postUser = {postUser}></AddUserForm>
        <UserList userData ={userData}></UserList>


        </>
    )
} 

export default UserContainer;