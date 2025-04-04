import React from "react";
import './mobileView.css';

const MobileView = () => {

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
            <h2>⚠️ This site is only available on desktop resolutions. Please log in from your PC. ⚠️</h2>
        </div>
    );
};

export default MobileView;