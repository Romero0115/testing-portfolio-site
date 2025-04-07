import React from "react";
import './notFound.css';

const NotFound = () => {

    return (
        <div id="not-found-container">
            <div>
                <h1>404</h1>
                <p>Oops! The page you're looking for doesn't exist.</p>
                <a href="/">Go back to Home</a>
            </div>
        </div>
    );
};

export default NotFound;