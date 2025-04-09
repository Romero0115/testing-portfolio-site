import React, { useEffect, useState } from "react";
import './navbar.css';
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { SetLoggedFalse } from "../../features/loggerSlice.js";
import { toastSuccess } from "../../utils/toast.js";

const Navbar = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1024);
  const { t, i18n } = useTranslation("navbar");
  const logged = useSelector(state => state.logger.isLogged);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const handleLogout = () => {
    dispatch(SetLoggedFalse());
    localStorage.removeItem("username");
    navigate("/");
    toastSuccess(t("toastLogout"));
  };

  if (!isDesktop) {
    return (
      <header id="header">
        <h2 id="title" onClick={() => navigate('/')}>
          {t("testingSite")}
        </h2>
        <div>
          <select id="languageSelect" onChange={handleLanguageChange} defaultValue={i18n.language}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
      </header>
    );
  }

  const navigation = logged ? (
    <div>
      <nav id="navbar">
        <NavLink to="/">{t("home")}</NavLink>
        <NavLink to="/my-account">{t("myAccount")}</NavLink>
        <NavLink to="/shop">{t("shop")}</NavLink>
        <NavLink to="/cart">{t("cart")}
          <img src="/media/software-testing.png" alt="Site banner" />
        </NavLink>
      </nav>
      <button id="logoutButton" onClick={handleLogout}>{t("logout")}</button>
    </div>
  ) : (
    <div>
      <nav id="navbar">
        <NavLink to="/">{t("home")}</NavLink>
        <NavLink to="/shop">{t("shop")}</NavLink>
        <NavLink to="/cart"><img src="/media/shopping-cart.svg" alt="Shopping cart" /></NavLink>
      </nav>
      <div id="authGroup">
        <button
          id="loginBtn"
          onClick={() => navigate('/log-in')}
        >
          {t("login")}
        </button>
        <button
          id="signupBtn"
          onClick={() => navigate('/sign-up')}
        >
          {t("signup")}
        </button>
      </div>
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

