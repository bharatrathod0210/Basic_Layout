import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Toolbar,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = () => {
  const location = useLocation();
  const userRole = localStorage.getItem("role") || "user";
  const [open, setOpen] = useState(true);

  const routes = {
    admin: [
      { path: "/dashboard", label: "Dashboard", icon: <DashboardIcon /> },
      { path: "/users", label: "Users", icon: <PeopleIcon /> },
    ],
    user: [
      { path: "/dashboard", label: "Dashboard", icon: <DashboardIcon /> },
      { path: "/profile", label: "Profile", icon: <AccountCircleIcon /> },
    ],
  };

  const menuItems = routes[userRole] || [];

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? 240 : 60,
        flexShrink: 0,
        height: "100vh",
        "& .MuiDrawer-paper": {
          width: open ? 240 : 60,
          transition: "width 0.3s",
          overflowX: "hidden",
          background: "#1976d2",
          color: "#fff",
          height: "100vh",
        },
      }}
    >
      <Toolbar>
        <IconButton onClick={() => setOpen(!open)} sx={{ color: "#fff" }}>
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <List>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.path}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            sx={{
              "&.Mui-selected": { backgroundColor: "#1565c0" },
              "&:hover": { backgroundColor: "#1e88e5" },
              color: "#fff",
            }}
          >
            <ListItemIcon sx={{ color: "#fff" }}>{item.icon}</ListItemIcon>
            {open && <ListItemText primary={item.label} />}
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
