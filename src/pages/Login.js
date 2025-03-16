// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Container,
//   TextField,
//   Button,
//   Typography,
//   Card,
//   CardContent,
//   Box,
//   Alert,
//   InputAdornment,
//   IconButton,
// } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Login({ setUser }) {
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const validationSchema = Yup.object({
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 characters")
//       .required("Password is required"),
//   });

//   const formik = useFormik({
//     initialValues: { email: "", password: "" },
//     validationSchema,
//     onSubmit: async (values) => {
//       setLoading(true);
//       setError("");

//       try {
//         const res = await axios.post(
//           "http://localhost:5000/auth/login",
//           values
//         );
//         localStorage.setItem("token", res.data.token);
//         setUser(res.data.user);
//         toast.success("Login successful!");
//         navigate("/dashboard");
//       } catch (err) {
//         setError("Invalid email or password.");
//         toast.error("Login failed. Check your credentials.");
//       } finally {
//         setLoading(false);
//       }
//     },
//   });

//   return (
//     <Container
//       component="main"
//       maxWidth="sm"
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <ToastContainer position="top-right" autoClose={3000} />
//       <Card sx={{ boxShadow: 3 }}>
//         <CardContent sx={{ p: 4 }}>
//           <Box sx={{ textAlign: "center", mb: 3 }}>
//             <Typography variant="h4" fontWeight="bold" color="primary">
//               Welcome back
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Enter your credentials to access your account
//             </Typography>
//           </Box>

//           {error && (
//             <Alert severity="error" sx={{ mb: 2 }}>
//               {error}
//             </Alert>
//           )}

//           <form onSubmit={formik.handleSubmit}>
//             <TextField
//               label="Email Address"
//               variant="outlined"
//               fullWidth
//               name="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.email && Boolean(formik.errors.email)}
//               helperText={formik.touched.email && formik.errors.email}
//               sx={{ mb: 2 }}
//             />

//             <TextField
//               label="Password"
//               variant="outlined"
//               fullWidth
//               name="password"
//               type={showPassword ? "text" : "password"}
//               value={formik.values.password}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.password && Boolean(formik.errors.password)}
//               helperText={formik.touched.password && formik.errors.password}
//               sx={{ mb: 3 }}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowPassword(!showPassword)}>
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />

//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               size="large"
//               disabled={loading}
//               sx={{ py: 1.5 }}
//             >
//               {loading ? "Signing in..." : "Sign In"}
//             </Button>
//           </form>

//           <Box sx={{ textAlign: "center", mt: 3 }}>
//             <Typography variant="body2">
//               Don’t have an account?{" "}
//               <a
//                 href="/signup"
//                 style={{
//                   color: "#1976d2",
//                   textDecoration: "none",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Sign up
//               </a>
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }

// export default Login;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  InputAdornment,
  IconButton,
  Divider,
  Paper,
  Grid,
  Checkbox,
  FormControlLabel,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Email,
  Lock,
  Google,
  GitHub,
  LinkedIn,
} from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login({ setUser }) {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError("");

      try {
        const res = await axios.post(
          "http://localhost:5000/auth/login",
          values
        );
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        toast.success("Login successful!");
        navigate("/dashboard");
      } catch (err) {
        setError("Invalid email or password.");
        toast.error("Login failed. Check your credentials.");
      } finally {
        setLoading(false);
      }
    },
  });

  const handleSocialLogin = (provider) => {
    toast.info(`${provider} login coming soon!`);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        p: 2,
      }}
    >
      <ToastContainer position="top-right" autoClose={3000} />
      <Paper
        elevation={10}
        sx={{
          display: "flex",
          width: "100%",
          maxWidth: 1000,
          overflow: "hidden",
          borderRadius: 2,
        }}
      >
        {/* Left side - Image/Branding */}
        {!isMobile && (
          <Box
            sx={{
              flex: "1 1 40%",
              background: "linear-gradient(135deg, #4568dc 0%, #b06ab3 100%)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              p: 4,
              color: "white",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: 0.1,
                backgroundImage: "url('/placeholder.svg?height=600&width=400')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <Typography
              variant="h3"
              fontWeight="bold"
              sx={{ mb: 2, zIndex: 1 }}
            >
              Welcome Back
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ mb: 4, zIndex: 1 }}
            >
              Access your account and continue your journey with us.
            </Typography>
            <Box sx={{ zIndex: 1 }}>
              <Typography variant="body2" align="center" sx={{ mt: 4 }}>
                Don't have an account?
              </Typography>
              <Button
                variant="outlined"
                color="inherit"
                fullWidth
                sx={{ mt: 1, borderColor: "white", color: "white" }}
                onClick={() => navigate("/signup")}
              >
                Create Account
              </Button>
            </Box>
          </Box>
        )}

        {/* Right side - Login Form */}
        <Box sx={{ flex: "1 1 60%", p: { xs: 3, md: 5 } }}>
          <Box sx={{ maxWidth: 400, mx: "auto" }}>
            <Box sx={{ mb: 4, textAlign: "center" }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="primary"
                gutterBottom
              >
                Sign In
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Enter your credentials to access your account
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <form onSubmit={formik.handleSubmit}>
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{ mb: 3 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email color="action" />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                name="password"
                type={showPassword ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                sx={{ mb: 2 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock color="action" />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 3,
                  flexWrap: "wrap",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      color="primary"
                      size="small"
                    />
                  }
                  label={<Typography variant="body2">Remember me</Typography>}
                />
                <Typography
                  variant="body2"
                  color="primary"
                  sx={{ cursor: "pointer", textDecoration: "none" }}
                  onClick={() => toast.info("Password reset coming soon!")}
                >
                  Forgot password?
                </Typography>
              </Box>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                disabled={loading}
                sx={{
                  py: 1.5,
                  mb: 3,
                  borderRadius: 2,
                  boxShadow: 2,
                  background:
                    "linear-gradient(90deg, #4568dc 0%, #b06ab3 100%)",
                  "&:hover": {
                    background:
                      "linear-gradient(90deg, #3f5bd5 0%, #a55ba8 100%)",
                  },
                }}
              >
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {isMobile && (
              <Box sx={{ textAlign: "center", mt: 3 }}>
                <Typography variant="body2">
                  Don't have an account?{" "}
                  <Typography
                    component="span"
                    variant="body2"
                    color="primary"
                    sx={{ cursor: "pointer", fontWeight: "bold" }}
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </Typography>
                </Typography>
              </Box>
            )}
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
