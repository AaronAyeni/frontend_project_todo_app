import { useEffect, useState } from "react";
import HouseHoldContainer from "./HouseholdContainer";
import TaskContainer from "./TaskContainers";
import UserContainer from "./UserContainer";


const HomeChampContainer = () => {


const [userData, setUserData] = useState([]); 


const fetchUserData = async () => {
    const response = await fetch("http://localhost:8080/users");
    const userData = await response.json();
    setUserData(userData);
}

// fetchUserData();
console.log(userData);
// console.log (fetchUserData ());



    useEffect(
        () => {
            fetchUserData();
        }, []
        
    );



    return(
        <>
        <h2>This is HomeChampContainer</h2>
        <TaskContainer></TaskContainer>
        <HouseHoldContainer></HouseHoldContainer>
        <UserContainer userData ={userData}></UserContainer>
        
        
        </>
    )


}

export default HomeChampContainer;