import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const routes = [
  { path: "/", element: (props) => <Login {...props} /> },
  { path: "/signup", element: <Signup /> },
  { path: "/dashboard", element: <ProtectedRoute component={Dashboard} /> },
];

function AppRoutes({ setUser }) {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            typeof route.element === "function"
              ? route.element({ setUser })
              : route.element
          }
        />
      ))}
    </Routes>
  );
}

export default AppRoutes;
