import React, { useEffect } from "react";
import './myAccount.css';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MyAccount = () => {
    const { t } = useTranslation("");
    const logged = useSelector(state => state.logger.isLogged);
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) {
            navigate('/');
        }
    }, [logged, navigate]);

    return (
        <div>My Account</div>
    );
};

export default MyAccount;