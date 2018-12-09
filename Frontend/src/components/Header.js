import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../containers/Search';

const Header = () => (
  <header className="nav-header">
    <Link to="/" className="nav-logo" />
    <Search />
  </header>
);

export default Header;
