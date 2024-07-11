import React from 'react';
const Household = ({ household }) => {


  return (
    <>
      <h4>This is a household component</h4>
      <ul>
        <li>{household.name}</li>
        <p>Users in this household</p>
        <li>{household.users ? household.users.map(user => user.name + " ") : "No users found"}</li>
      </ul>
    </>
  );
}

export default Household;





