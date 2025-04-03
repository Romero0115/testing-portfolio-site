import React from "react";
import './navbar.css';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"

const Navbar = () => {

  const logged = useSelector(state => state.logger.isLogged);
  let navigation;

  (logged ? (
    navigation = <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/MyAccount">My Account</NavLink>
      <NavLink to="/Shop">Shop</NavLink>
      <NavLink to="/Cart">Cart</NavLink>
    </nav>
  ) : (
    navigation = <p>Welcome! Please log in.</p>
  ));

  return (
    <header>
      <h2>Testing Site</h2>
      <div>
        {navigation}
      </div>
    </header>
  );
};

export default Navbar;