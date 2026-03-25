import React from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import AboutPage from './AboutPage';
import ResourcesPage from './ResourcesPage';
import PetPage from './PetPage';
import PetList from './PetList';
import PetDetail from './PetDetail';

const App = ({ pets }) => {
  return (
    <div>
      <header>
        <h1><Link to="/adopt">Adopt a Pet</Link></h1>
        {/* Add other navigation links here */}
      </header>
      <Routes>
        <Route path="about" element={<AboutPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="adopt" element={<PetPage pets={pets} />}>
          <Route path=":petName" element={<PetDetail pets={pets} />} />
          <Route index element={<PetList pets={pets} />} />
        </Route>
        <Route path="*" element={<Navigate to="/adopt" />} />
      </Routes>
    </div>
  );
};

export default App;