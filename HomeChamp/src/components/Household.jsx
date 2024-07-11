import React from 'react';

import '/src/styles/Household.css'

const Household = ({ household }) => {


  if(household.users == null){
    console.log("no users found");
  }

  console.log(household);
  return (
    <div className="household-container">
      <div className="household-name">{household.name}</div>
      <div className="users-section">
        <p><strong>Users in this household:</strong></p>
        <ul>
          {household.users && household.users.map((user, index) => (
            <li key={index}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Household;





