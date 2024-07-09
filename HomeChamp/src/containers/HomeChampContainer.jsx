import { useEffect, useState } from "react";
import HouseHoldContainer from "./HouseholdContainer";
import TaskContainer from "./TaskContainers";
import UserContainer from "./UserContainer";


const HomeChampContainer = () => {


const [userData, setUserData] = useState([]); 

const [categoryData, setCategoryData] = useState([]);

const [householdData, setHouseholdData] = useState([]);


const fetchUserData = async () => {
    const response = await fetch("http://localhost:8080/users");
    const userData = await response.json();
    setUserData(userData);
}

const fetchCategories = async () => {
    const response = await fetch("http://localhost:8080/preferences");
    const categories = await response.json();
    setCategoryData(categories);
    // console.log("categories",categories);
}

const fetchHouseholdData = async () => {
    const response = await fetch("http://localhost:8080/households");
    const householdData = await response.json();
    setHouseholdData(householdData);
}

const postUser = async (newUser) => {
   const response = await fetch("http://localhost:8080/users",{
        method : "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(newUser)
})
    const savedUser = await response.json();
    console.log(savedUser);
    setUserData([savedUser, ...userData]);

};







// fetchUserData();
// console.log(userData);
// console.log(categoryData);
// console.log (fetchUserData ());



    useEffect(
        () => {
            fetchUserData();
            fetchCategories();
            fetchHouseholdData();
        }, []
        
    );


console.log(householdData);

    return(
        <>
        <h2>This is HomeChampContainer</h2>
        <TaskContainer></TaskContainer>
        <HouseHoldContainer householdData = {householdData}></HouseHoldContainer>
        <UserContainer userData ={userData} categoryData={categoryData} householdData={householdData} postUser = {postUser}></UserContainer>
        
        
        </>
    )


}

export default HomeChampContainer;