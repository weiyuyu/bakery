import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>Roster</Link></li>
        <li><Link to='/order'>Schedule</Link></li>
        <li><Link to='/instagram'>Instagram</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
