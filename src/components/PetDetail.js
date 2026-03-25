import React from 'react';
import { useParams } from 'react-router-dom';

const PetDetail = ({ pets = [] }) => {
  const { petName } = useParams();
  const pet = pets.find(p => p.name === petName);

  if (!pet) {
    return <p>No pet specified</p>;
  }

  return (
    <div>
      <h2>Adopt {pet.name}</h2>
      <p>{pet.description}</p>
      <p>{pet.details}</p>
      <button disabled>Adopt</button>
    </div>
  );
};

export default PetDetail;