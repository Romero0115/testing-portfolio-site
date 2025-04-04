import React from "react";
import './navbar.css';
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom"

const Navbar = () => {

  const logged = useSelector(state => state.logger.isLogged);

  const navigate = useNavigate();

  const navigation = logged ? (
    <div>
      <nav id="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/MyAccount">My Account</NavLink>
        <NavLink to="/Shop">Shop</NavLink>
        <NavLink to="/Cart">Cart</NavLink>
      </nav>
      <button>Log out</button>
    </div>
  ) : (
    <div>
      <p id="welcomeTxt">Welcome! Please log in.</p>
      <button
        id="loginBtn"
        onClick={() => navigate('/log-in')}
      >
        Log in
      </button>

    </div>
  );

  return (
    <header id="header">
      <h2
        id="title"
        onClick={() => navigate('/')}
      >
        Testing Site 🌐
      </h2>
      <div id="navbarContainer">
        {navigation}
      </div>
    </header>
  );
};

export default Navbar;