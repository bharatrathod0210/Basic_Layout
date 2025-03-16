import { Navigate } from "react-router-dom";

function ProtectedRoute({ component: Component, allowedRoles }) {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  if (!token) {
    return <Navigate to="/" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/dashboard" />;
  }

  return <Component />;
}

export default ProtectedRoute;
