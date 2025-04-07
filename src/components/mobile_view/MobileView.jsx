import React from "react";
import './mobileView.css';
import { useTranslation } from "react-i18next";

const MobileView = () => {
    const { t } = useTranslation("mobileView");

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            padding: '2rem',
            backgroundColor: '#f8d7da',
            color: '#721c24'
        }}>
            <h2>{t("alert")}</h2>
        </div>
    );
};

export default MobileView;