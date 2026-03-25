import React from 'react'; //import React Component
import { NavLink } from 'react-router-dom';

export const AboutNav = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/about" activeClassName="active">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/adopt" activeClassName="active">Adopt a Pet</NavLink>
      </li>
      <li>
        <NavLink to="/resources" activeClassName="active">Resources</NavLink>
      </li>
    </ul>
  </nav>
);