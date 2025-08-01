import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const ProtectedRoute = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return user ? children : <Navigate to="/admin" replace />;
};

export default ProtectedRoute;
