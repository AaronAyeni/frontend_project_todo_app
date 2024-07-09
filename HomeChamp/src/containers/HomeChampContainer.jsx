import HouseHoldContainer from "./HouseholdContainer";
import TaskContainer from "./TaskContainers";
import UserContainer from "./UserContainer";


const HomeChampContainer = () => {

const fetchUserData = async () => {
    const response = await fetch("http://localhost:8080/users");
    const userData = await response.json();
    return userData;
}

    return(
        <>
        <h2>This is HomeChampContainer</h2>
        <TaskContainer></TaskContainer>
        <HouseHoldContainer></HouseHoldContainer>
        <UserContainer></UserContainer>
        
        
        </>
    )


}

export default HomeChampContainer;