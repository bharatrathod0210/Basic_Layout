import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const AppLayout = ({ user }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Sidebar (Full Height) */}
      <Sidebar />

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Navbar user={user} />
        <Box sx={{ flexGrow: 1, padding: 3, marginTop: "64px" }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
