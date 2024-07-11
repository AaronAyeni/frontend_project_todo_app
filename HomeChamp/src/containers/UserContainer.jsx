import { useState, useEffect } from "react";
import User from "../components/User";
import AddUserForm from "../components/forms/AddUserForm";
import UserList from "../components/lists/UserList";

const UserContainer = ({userData, categoryData, householdData,postUser}) => {
    
    const [filteredUsers, setFilteredUsers] = useState(userData);

    useEffect(() => {
        setFilteredUsers(userData);
    }, [userData]);

    const handleFilterChange = (searchTerm) => {
        const filtered = userData.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    return(
        <>
        <AddUserForm userData={userData} categoryData ={categoryData} householdData={householdData} postUser = {postUser} onFilterChange={handleFilterChange}></AddUserForm>
        <UserList userData ={filteredUsers}></UserList>


        </>
    )
} 

export default UserContainer;