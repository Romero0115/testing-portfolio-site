import React, { useEffect } from "react";
import './cart.css';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Cart = () => {
    const { t } = useTranslation("");
    const logged = useSelector(state => state.logger.isLogged);
    const navigate = useNavigate();

    useEffect(() => {
        if (!logged) {
            navigate('/');
        }
    }, [logged, navigate]);

    return (
        <div>Cart</div>
    );
};

export default Cart;