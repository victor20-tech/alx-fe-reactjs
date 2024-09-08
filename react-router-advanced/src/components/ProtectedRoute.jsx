import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = false; // Simulated auth status

const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default ProtectedRoute;
