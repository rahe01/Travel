import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLoaderData } from "react-router-dom";


const PrivateRoute = ({children}) => {

    const {user , loading} = useContext(AuthContext);
    const location = useLoaderData()

    if (loading) {
        return <span className="loading loading-spinner text-warning"></span>
    }

    if (user) {
        return children
    }






    return (
       <Navigate to="/login" state={location.pathname} ></Navigate>
    );
};

export default PrivateRoute;