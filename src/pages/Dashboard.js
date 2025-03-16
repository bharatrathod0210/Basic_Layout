import { useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useNavigate } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import PeopleIcon from "@mui/icons-material/People";

const barData = [
  { name: "Jan", jobs: 40 },
  { name: "Feb", jobs: 80 },
  { name: "Mar", jobs: 60 },
  { name: "Apr", jobs: 90 },
  { name: "May", jobs: 100 },
];

const pieData = [
  { name: "Completed", value: 300 },
  { name: "Pending", value: 150 },
  { name: "In Progress", value: 100 },
];

const COLORS = ["#4CAF50", "#FFC107", "#FF5722"];

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ mb: 3, textAlign: "center" }}
      >
        Dashboard Overview
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ bgcolor: "#1976d2", color: "#fff" }}>
            <CardContent>
              <Box display="flex" alignItems="center">
                <TrendingUpIcon fontSize="large" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="h6">Revenue</Typography>
                  <Typography variant="h5" fontWeight="bold">
                    $12,540
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ bgcolor: "#43a047", color: "#fff" }}>
            <CardContent>
              <Box display="flex" alignItems="center">
                <WorkOutlineIcon fontSize="large" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="h6">Total Jobs</Typography>
                  <Typography variant="h5" fontWeight="bold">
                    125
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ bgcolor: "#fbc02d", color: "#fff" }}>
            <CardContent>
              <Box display="flex" alignItems="center">
                <PeopleIcon fontSize="large" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="h6">Total Customers</Typography>
                  <Typography variant="h5" fontWeight="bold">
                    98
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, height: 300 }}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
              Jobs Completed (Monthly)
            </Typography>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={barData}>
                <XAxis dataKey="name" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="jobs" fill="#8884d8" barSize={50} />
              </BarChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, height: 300 }}>
            <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
              Job Status Distribution
            </Typography>
            <ResponsiveContainer width="100%" height="80%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  fill="#82ca9d"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
