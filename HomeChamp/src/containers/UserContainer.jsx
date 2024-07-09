import User from "../components/User";
import AddUserForm from "../components/forms/AddUserForm";
import UserList from "../components/lists/UserList";

const UserContainer = ({userData, categoryData, householdData}) => {

    return(
        <>

        <h2>This is UserContainer</h2>
        
        <AddUserForm userData={userData} categoryData ={categoryData} householdData={householdData}></AddUserForm>
        <UserList userData ={userData}></UserList>


        </>
    )
} 

export default UserContainer;