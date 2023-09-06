import React from 'react';

function Students() {

let orangePigs = ["Helene", "Micha", "Tahir", "Dmitrii", "Nico", "Merlin", "Rafal"];

  return <div>
        <h2>Orange Pigs Cohort</h2>
        {orangePigs.map ((student) =>{
            return <p>{student}</p>
        })}
    </div>;
  
}

export default Students;