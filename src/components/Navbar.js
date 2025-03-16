import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
  Divider,
  Tooltip,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/"); // Redirect to Login page
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: 1201, background: "#1565c0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" noWrap>
          Cloud Job Management System
        </Typography>

        <Box>
          <Tooltip title="Settings">
            <IconButton onClick={handleMenuOpen} sx={{ color: "#fff" }}>
              <Avatar
                sx={{
                  width: 35,
                  height: 35,
                  bgcolor: "white",
                  color: "#1565c0",
                  fontSize: "1.2rem",
                }}
              >
                {userInitial}
              </Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            sx={{ mt: 1 }}
          >
            <MenuItem onClick={() => navigate("/profile")}>
              <AccountCircleIcon sx={{ mr: 1, color: "#1565c0" }} />
              Profile
            </MenuItem>
            <Divider />
            <MenuItem onClick={handleLogout}>
              <ExitToAppIcon sx={{ mr: 1, color: "#d32f2f" }} />
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
