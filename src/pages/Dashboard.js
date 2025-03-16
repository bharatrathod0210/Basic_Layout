import { Container, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Container maxWidth="md">
      <Paper
        elevation={3}
        sx={{ padding: 3, marginTop: 5, textAlign: "center" }}
      >
        <Typography variant="h4">Welcome to Dashboard</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          This is a protected dashboard page. You can add more pages easily.
        </Typography>
        <Button
          variant="contained"
          color="error"
          onClick={handleLogout}
          sx={{ mt: 3 }}
        >
          Logout
        </Button>
      </Paper>
    </Container>
  );
}

export default Dashboard;
