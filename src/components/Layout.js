import { Box, Toolbar } from "@mui/material";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const location = useLocation();
  const hideSidebar = ["/", "/signup"].includes(location.pathname);

  return (
    <Box sx={{ display: "flex" }}>
      {!hideSidebar && <Sidebar />}
      <Box component="main" sx={{ flexGrow: 1 }}>
        {!hideSidebar && <Navbar />}
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
