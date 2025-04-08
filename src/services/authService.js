// src/services/authService.js

const API_URL = 'http://localhost:3001';

export async function loginUser(email, password) {
    try {
        const response = await fetch(`${API_URL}/services/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.toastText || 'ERROR');
        }

        return data;
    } catch (error) {
        console.error('Login error:', error.message);
        throw error;
    };
};

