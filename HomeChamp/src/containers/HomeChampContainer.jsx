import { useEffect, useState } from "react";
import HouseHoldContainer from "./HouseholdContainer";
import TaskContainer from "./TaskContainers";
import UserContainer from "./UserContainer";
import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom";
import UserList from "../components/lists/UserList";
import Navigation from "../components/Navigation";
import Home from "../components/Home";



const HomeChampContainer = () => {


const [userData, setUserData] = useState([]); 

const [categoryData, setCategoryData] = useState([]);

const [householdData, setHouseholdData] = useState([]);

const [taskData, setTaskData] = useState([]);



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

const fetchTaskData = async () => {
    const response = await fetch("http://localhost:8080/tasks");
    const taskData = await response.json();


    setTaskData(taskData);
}

console.log(taskData)

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



const postHousehold = async (newHousehold) => {
    console.log("new household:", newHousehold);
    const response = await fetch("http://localhost:8080/households",{
         method : "POST",
         headers: {"Content-Type":"application/json"},
         body: JSON.stringify(newHousehold)
 })
     const savedHousehold = await response.json();
     console.log(savedHousehold);
     setHouseholdData([savedHousehold, ...householdData]);
 
 };

const postTask = async (newTask) => {
    const response = await fetch("http://localhost:8080/tasks",{
        method : "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(newTask)


    }

)
    const savedTask = await response.json();

    const patchReponse = await fetch(`http://localhost:8080/tasks/assign-task-by-user/${savedTask.id}`,{
        method : "PATCH",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            assigningUserId : 9,
            userReceivingTaskId : newTask.userId
        })
    })

    const savedUserToTask = await patchReponse.json();



    setTaskData([savedUserToTask,...taskData]);

}

const updateStatus = async (taskToUpdateStatus) => {
    const response = await fetch(`http://localhost:8080/tasks/update-status/${taskToUpdateStatus.id}`,{
    method : "PATCH",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify(taskToUpdateStatus)
})
   await fetchTaskData();

}




//patch mapping 
 




// fetchUserData();
// console.log(userData);
// console.log(categoryData);
// console.log (fetchUserData ());



    useEffect(
        () => {
            fetchUserData();
            fetchCategories();
            fetchHouseholdData();
            fetchTaskData();

        }, []
        
    );


    const homechampRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Navigation />,
            children: [
                { path: "/",
                     element: <Home 
                     /> 
                }, 
                {
                    path: "/users",
                    element: <UserContainer
                    userData ={userData} 
                    categoryData={categoryData} 
                    householdData={householdData} 
                    postUser = {postUser}
                        />
                },
                {
                    path: "/tasks",
                    element: <TaskContainer
                    taskData = {taskData} 
                    categoryData={categoryData} 
                    householdData={householdData} 
                    userData ={userData} 
                    postTask = {postTask}
                    updateStatus = {updateStatus}
                        />
                },
                {
                    path: "/households",
                    // loader: chocolateLoader,
                    element: <HouseHoldContainer
                    householdData = {householdData} 
                    postHousehold = {postHousehold}
                        />
                }
            ]
        }
    ])


    

    



    return(
        <>
  
        <RouterProvider router={homechampRoutes}/>

        </>
    )


}

export default HomeChampContainer;