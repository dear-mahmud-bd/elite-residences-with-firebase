/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import PropTypes from 'prop-types';
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // console.log(location.pathname);
    const [toastShown, setToastShown] = useState(false);

    if (loading) {
        return <div className='flex justify-center my-20'><p className="loading loading-bars loading-lg text-custom-green-dark"></p></div>
    }
    if (user) return children;

    return <Navigate state={location.pathname} to="/signin"></Navigate>;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;