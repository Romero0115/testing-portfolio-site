import React, { useEffect, useState } from "react";
import './logIn.css';
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toastSuccess, toastError } from "../../utils/toast.js";
import { loginUser } from "../../services/authService.js";
import { SetLoggedTrue  } from "../../features/loggerSlice.js"

const LogIn = () => {
    const { t } = useTranslation("logIn");
    const logged = useSelector(state => state.logger.isLogged);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (logged) {
            navigate('/');
        }
    }, [logged, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(email, password);
            toastSuccess(t(response.toastText)); 
            dispatch(SetLoggedTrue(email)); 
            navigate("/"); 
        } catch (error) {
            toastError(t(error.message));
        };
    };

    return (
        <div id="login-container">
            <div id="login-content">
                <div id="login-card">
                    <h2>{t("title")}</h2>
                    <form id="login-form" onSubmit={handleSubmit}>
                        <div id="email-group">
                            <label htmlFor="email">{t("emailLabel")}</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                placeholder={t("emailPlaceholder")}
                                onChange={(e) => setEmail(e.target.value)}
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
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" id="btn-login">{t("loginButton")}</button>
                    </form>
                    <p id="signup-link">
                        {t("signUpLabel")} <NavLink to="/sign-up">{t("signUpLink")}</NavLink>
                    </p>
                </div>
                <div id="visitor-info">
                    <h3>{t("visitorTitle")}</h3>
                    <p>{t("visitorMessage")}</p>
                    <p><strong>{t("visitorEmailLabel")}</strong> {t("visitorEmail")}</p>
                    <p><strong>{t("visitorPasswordLabel")}</strong> {t("visitorPassword")}</p>
                </div>
            </div>
        </div>
    );
};

export default LogIn;