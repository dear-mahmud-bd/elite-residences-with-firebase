/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { createContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    

    const authInfo = {

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node, 
};
export default AuthProvider;