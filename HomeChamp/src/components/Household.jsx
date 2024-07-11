import React from 'react';

import '/src/styles/Household.css'

const Household = ({ household }) => {


  return (
    <article className ='household-container-article'>
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
    </article>

  );
}
export default Household;





