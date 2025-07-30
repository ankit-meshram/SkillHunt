import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const user = {
    role: "recruiter"
};

const ProtectedRoute = ({ children }) => {


    useEffect(() => {
        if (user === null || user.role !== 'recruiter') {
            navigate("/");
        }
    }, []);

    return (
        <>
            {children}
        </>
    );
};
export default ProtectedRoute;