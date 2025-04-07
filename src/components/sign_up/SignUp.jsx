import React, { useEffect } from "react";
import './signUp.css';
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SignUp = () => {
    const { t } = useTranslation("signUp");
    const logged = useSelector(state => state.logger.isLogged);
    const navigate = useNavigate();

    useEffect(() => {
        if (logged) {
            navigate('/');
        }
    }, [logged, navigate]);

    return (
        <div id="signup-container">
            <div id="signup-card">
                <h2>{t("title")}</h2>
                <form id="signup-form">
                    <div id="username-group">
                        <label htmlFor="username">{t("usernameLabel")}</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder={t("usernamePlaceholder")}
                            required
                        />
                    </div>
                    <div id="email-group">
                        <label htmlFor="email">{t("emailLabel")}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder={t("emailPlaceholder")}
                            required
                        />
                    </div>
                    <div id="password-group">
                        <label htmlFor="password">{t("passwordLabel")}</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder={t("passwordPlaceholder")}
                            required
                        />
                    </div>
                    <div id="repeat-password-group">
                        <label htmlFor="repeat-password">{t("repeatPasswordLabel")}</label>
                        <input
                            type="password"
                            id="repeat-password"
                            name="repeat-password"
                            placeholder={t("repeatPasswordPlaceholder")}
                            required
                        />
                    </div>
                    <div id="token-group">
                        <label htmlFor="token">{t("tokenLabel")}</label>
                        <input
                            type="text"
                            id="token"
                            name="token"
                            placeholder={t("tokenPlaceholder")}
                            required
                        />
                        <p id="token-info">{t("tokenInfo")}</p>
                    </div>
                    <button type="submit" id="btn-signup">{t("signupButton")}</button>
                </form>
                <p id="login-link">{t("loginLabel")} <NavLink to="/log-in">{t("loginLink")}</NavLink></p>
            </div>
        </div>
    );
};

export default SignUp;