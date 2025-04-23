import React, { useEffect, useState } from "react";
import './signUp.css';
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { toastSuccess, toastError } from "../../utils/toast.js";
import { registerUser, loginUser } from "../../services/authService.js";
import { SetLoggedTrue  } from "../../features/loggerSlice.js"

const SignUp = () => {
    const { t } = useTranslation("signUp");
    const logged = useSelector(state => state.logger.isLogged);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    useEffect(() => {
        if (logged) {
            navigate('/');
        }
    }, [logged, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== repeatPassword) {
            toastError(t("toastPasswordMismatch"));
            return;
        }

        try {
            await registerUser(name, email, password);
            toastSuccess(t("toastSignupSuccess"));

            const response = await loginUser(email, password);
            dispatch(SetLoggedTrue(name));
            navigate("/");
        } catch (error) {
            toastError(t(error.message));
        }
    };

    return (
        <div id="signup-container">
            <div id="signup-card">
                <h2>{t("title")}</h2>
                <form id="signup-form" onSubmit={handleSubmit}>
                    <div id="name-group">
                        <label htmlFor="name">{t("nameLabel")}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder={t("namePlaceholder")}
                            onChange={(e) => setName(e.target.value)}
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
                    <div id="repeat-password-group">
                        <label htmlFor="repeat-password">{t("repeatPasswordLabel")}</label>
                        <input
                            type="password"
                            id="repeat-password"
                            name="repeat-password"
                            placeholder={t("repeatPasswordPlaceholder")}
                            onChange={(e) => setRepeatPassword(e.target.value)}
                            required
                        />
                        <p id="password-info">{t("passwordInfo")}</p>
                    </div>
                    <button type="submit" id="btn-signup">{t("signupButton")}</button>
                </form>
                <p id="login-link">{t("loginLabel")} <NavLink to="/log-in">{t("loginLink")}</NavLink></p>
            </div>
        </div>
    );
};

export default SignUp;