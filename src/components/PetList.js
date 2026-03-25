import React from 'react';
import { Link } from 'react-router-dom';

const PetList = ({ pets = [] }) => (
  <div>
    <h2>Dogs for Adoption</h2>
    <ul>
      {pets.map(pet => (
        <li key={pet.name}>
          <h3>{pet.name}</h3>
          <p>{pet.description}</p>
          <Link to={`/adopt/${pet.name}`} className="button">Meet {pet.name}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default PetList;
