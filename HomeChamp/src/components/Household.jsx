import React from 'react';
const Household = ({ household }) => {

  let statementCheck = household 
  if(household.users == null){
    console.log("no users found");
  }

  console.log(household);
  return (
    <>
      <h4>This is a household component</h4>
      <ul>
        <li>{household.name}</li>
        <p>Users in this household</p>
        <li>{household.users.map( (user) => {return user.name + " "})}</li>
      </ul>
    </>
  );
}

export default Household;





