import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Simulate an authentication check
        const checkAuth = () => {
            // Replace this with actual authentication logic
            const authStatus = true; // Simulate authenticated state (true/false)
            setIsAuthenticated(authStatus);
        };

        checkAuth();
    }, []);

    if (!isAuthenticated) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" />;
    }

    // Render the child components if authenticated
    return children;
};

export default ProtectedRoute;
