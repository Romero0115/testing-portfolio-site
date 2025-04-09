import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastBaseStyles = {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: "light",
    style: {
        fontWeight: "bold",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "12px 16px",
        fontSize: "16px",
        border: "2px solid",
    },
};

export const toastSuccess = (message) => {
    toast.success(message, {
        ...toastBaseStyles,
        style: {
            ...toastBaseStyles.style,
            color: "var(--lightGrey)",
            backgroundColor: "var(--white)",
            borderColor: "var(--success)",
        }
    });
};

export const toastError = (message) => {
    toast.error(message, {
        ...toastBaseStyles,
        style: {
            ...toastBaseStyles.style,
            color: "var(--lightGrey)",
            backgroundColor: "var(--white)",
            borderColor: "var(--error)",
        }
    });
};

export const toastWarning = (message) => {
    toast.warn(message, {
        ...toastBaseStyles,
        style: {
            ...toastBaseStyles.style,
            color: "var(--lightGrey)",
            backgroundColor: "var(--white)",
            borderColor: "var(--warning)",
        }
    });
};

export const toastInfo = (message) => {
    toast.info(message, {
        ...toastBaseStyles,
        style: {
            ...toastBaseStyles.style,
            color: "var(--lightGrey)",
            backgroundColor: "var(--white)",
            borderColor: "var(--info)",
        }
    });
};