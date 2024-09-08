import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

// Custom useAuth Hook
const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        // Simulate an authentication check
        const checkAuth = () => {
            // Replace this with actual authentication check logic
            const authStatus = true; // Simulate authenticated state (true/false)
            setIsAuthenticated(authStatus);
        };

        checkAuth();
    }, []);

    return isAuthenticated;
};

// ProtectedRoute Component
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuth();

    if (!isAuthenticated) {
        // Redirect to login if not authenticated
        return <Navigate to="/login" />;
    }

    // Render the child components if authenticated
    return children;
};

export default ProtectedRoute;
