const API_URL = process.env.REACT_APP_API_URL;


const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return passwordRegex.test(password);
};

const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
};



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



export async function registerUser(name, email, password) {
    if (!validateName(name)) {
        throw new Error("toastInvalidName");
    }

    if (!validateEmail(email)) {
        throw new Error("toastInvalidEmail");
    }

    if (!validatePassword(password)) {
        throw new Error("toastWeakPassword");
    }

    try {
        const response = await fetch(`${API_URL}/services/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.toastText || 'ERROR');
        }

        return data;
    } catch (error) {
        console.error('Registration error:', error.message);
        throw error;
    }
}