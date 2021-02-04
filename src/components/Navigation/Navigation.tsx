import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../shared/routes';

export const Navigation = () => (
  <nav>
    <div>
      <Link to={routes.specializations.root}>Specializations</Link>
    </div>
    <div>
      <Link to={routes.masters.root}>Masters</Link>
    </div>
  </nav>
);
