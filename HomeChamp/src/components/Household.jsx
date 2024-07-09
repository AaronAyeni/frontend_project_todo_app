import React from 'react';
const Household = ({ household }) => {
  console.log(household);
  return (
    <>
      <h4>This is a household component</h4>
      <ul>
        <li>{household.name}</li>
        <p>Users in this household</p>
        <li>
          {household && household.users
            ? household.users.map((user, index) => (
                <span key={index}>{user.name} </span>
              ))
            : "No users"}
        </li>
      </ul>
    </>
  );
}
export default Household;





