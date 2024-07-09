import { useEffect, useState } from "react";
import HouseHoldContainer from "./HouseholdContainer";
import TaskContainer from "./TaskContainers";
import UserContainer from "./UserContainer";


const HomeChampContainer = () => {


const [userData, setUserData] = useState([]); 

const [categoryData, setCategoryData] = useState([]);


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

// fetchUserData();
// console.log(userData);
// console.log(categoryData);
// console.log (fetchUserData ());



    useEffect(
        () => {
            fetchUserData();
            fetchCategories();
        }, []
        
    );



    return(
        <>
        <h2>This is HomeChampContainer</h2>
        <TaskContainer></TaskContainer>
        <HouseHoldContainer></HouseHoldContainer>
        <UserContainer userData ={userData} categoryData={categoryData} ></UserContainer>
        
        
        </>
    )


}

export default HomeChampContainer;