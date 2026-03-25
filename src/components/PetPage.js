import React from 'react';
import { Outlet } from 'react-router-dom';

const PetPage = ({ pets }) => {
  return (
    <div>
      <p>Interested in adopting a pet?</p>
      <Outlet context={{ pets }} />
    </div>
  );
};

export default PetPage;