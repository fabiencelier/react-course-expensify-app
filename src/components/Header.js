import React from 'react';
import { NavLink }from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>Dashboard</NavLink>
    <NavLink to='/create' activeClassName='is-active' exact={true}>Create new expense</NavLink>
    <NavLink to='/edit' activeClassName='is-active' exact={true}>Edit expense</NavLink>
    <NavLink to='/help' activeClassName='is-active' exact={true}>Help!</NavLink>
  </header>
);

export default Header;