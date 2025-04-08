import React from "react";
import './navbar.css';
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SetLoggedFalse } from "../../features/loggerSlice.js";
import { toastSuccess } from "../../utils/toast.js";

const Navbar = () => {
  const { t, i18n } = useTranslation("navbar");
  const logged = useSelector(state => state.logger.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleLogout = () => {
    dispatch(SetLoggedFalse());
    localStorage.removeItem("username");
    navigate("/");
    toastSuccess(t("toastLogout"));
  };

  const navigation = logged ? (
    <div>
      <nav id="navbar">
        <NavLink to="/">{t("home")}</NavLink>
        <NavLink to="/my-account">{t("myAccount")}</NavLink>
        <NavLink to="/Shop">{t("shop")}</NavLink>
        <NavLink to="/Cart">{t("cart")}</NavLink>
      </nav>
      <button id="logoutButton" onClick={handleLogout}>{t("logout")}</button>
    </div>
  ) : (
    <div>
      <p id="welcomeTxt">{t("welcome")}</p>
      <button
        id="loginBtn"
        onClick={() => navigate('/log-in')}
      >
        {t("login")}
      </button>
    </div>
  );

  return (
    <header id="header">
      <h2
        id="title"
        onClick={() => navigate('/')}
      >
        {t("testingSite")}
      </h2>
      <div id="navbarContainer">
        {navigation}
        <select id="languageSelect" onChange={handleLanguageChange} defaultValue={i18n.language}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </header>
  );
};

export default Navbar;

