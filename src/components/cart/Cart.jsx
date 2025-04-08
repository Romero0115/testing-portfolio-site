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
        <div
            style={{
                background: "#fdf6e3",
                color: "#333",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                textAlign: "center",
                padding: "1rem",
                flexDirection: "column",
            }}
        >
            <h1 style={{ fontSize: "3rem" }}>🚧 Work in progress... 👷‍♀️</h1>
            <p style={{ fontSize: "1.5rem", marginTop: "1rem", color: "#777" }}>
                This section is not quite ready yet, but it's coming soon! ⏳💻
            </p>
        </div>
    );
};

export default Cart;