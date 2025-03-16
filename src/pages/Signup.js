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
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import axios from "axios";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// function Signup() {
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   // **Validation Schema using Yup**
//   const validationSchema = Yup.object({
//     fullName: Yup.string()
//       .min(2, "Full Name must be at least 2 characters")
//       .required("Full Name is required"),
//     email: Yup.string()
//       .email("Invalid email format")
//       .required("Email is required"),
//     password: Yup.string()
//       .min(8, "Password must be at least 8 characters")
//       .required("Password is required"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password"), null], "Passwords must match")
//       .required("Confirm Password is required"),
//   });

//   const formik = useFormik({
//     initialValues: {
//       fullName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     },
//     validationSchema,
//     onSubmit: async (values) => {
//       setLoading(true);
//       setError("");

//       try {
//         await axios.post("http://localhost:5000/auth/signup", values);
//         toast.success("Account created successfully!");
//         navigate("/");
//       } catch (err) {
//         setError("Signup failed. Try again.");
//         toast.error("Signup failed. Check your details.");
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
//               Create an Account
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Sign up to get started
//             </Typography>
//           </Box>

//           {error && (
//             <Alert severity="error" sx={{ mb: 2 }}>
//               {error}
//             </Alert>
//           )}

//           <form onSubmit={formik.handleSubmit}>
//             <TextField
//               label="Full Name"
//               variant="outlined"
//               fullWidth
//               name="fullName"
//               value={formik.values.fullName}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={formik.touched.fullName && Boolean(formik.errors.fullName)}
//               helperText={formik.touched.fullName && formik.errors.fullName}
//               sx={{ mb: 2 }}
//             />

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
//               sx={{ mb: 2 }}
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

//             <TextField
//               label="Confirm Password"
//               variant="outlined"
//               fullWidth
//               name="confirmPassword"
//               type={showPassword ? "text" : "password"}
//               value={formik.values.confirmPassword}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               error={
//                 formik.touched.confirmPassword &&
//                 Boolean(formik.errors.confirmPassword)
//               }
//               helperText={
//                 formik.touched.confirmPassword && formik.errors.confirmPassword
//               }
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
//               {loading ? "Creating account..." : "Sign Up"}
//             </Button>
//           </form>

//           <Box sx={{ textAlign: "center", mt: 3 }}>
//             <Typography variant="body2">
//               Already have an account?{" "}
//               <a
//                 href="/"
//                 style={{
//                   color: "#1976d2",
//                   textDecoration: "none",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Log in
//               </a>
//             </Typography>
//           </Box>
//         </CardContent>
//       </Card>
//     </Container>
//   );
// }

// export default Signup;

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
  Paper,
  Grid,
  Checkbox,
  FormControlLabel,
  useTheme,
  useMediaQuery,
  Stepper,
  Step,
  StepLabel,
  LinearProgress,
} from "@mui/material";
import {
  Visibility,
  VisibilityOff,
  Email,
  Person,
  Lock,
  ArrowBack,
  ArrowForward,
  CheckCircle,
} from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const steps = ["Personal Info", "Account Security", "Confirmation"];

  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(2, "Full Name must be at least 2 characters")
      .required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one uppercase letter, one lowercase letter, and one number"
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    agreeTerms: Yup.boolean()
      .oneOf([true], "You must accept the terms and conditions")
      .required("You must accept the terms and conditions"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
    },
    validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      setError("");

      try {
        await new Promise((resolve) => setTimeout(resolve, 1500));

        await axios.post("http://localhost:5000/auth/signup", {
          fullName: values.fullName,
          email: values.email,
          password: values.password,
        });

        setCompleted(true);
        toast.success("Account created successfully!");

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } catch (err) {
        const errorMessage =
          err.response?.data?.message || "Signup failed. Try again.";
        setError(errorMessage);
        toast.error(errorMessage);
      } finally {
        setLoading(false);
      }
    },
  });

  const handleNext = () => {
    let canProceed = false;

    if (activeStep === 0) {
      if (
        !formik.errors.fullName &&
        !formik.errors.email &&
        formik.touched.fullName &&
        formik.touched.email
      ) {
        canProceed = true;
      } else {
        formik.setFieldTouched("fullName", true);
        formik.setFieldTouched("email", true);
      }
    } else if (activeStep === 1) {
      if (
        !formik.errors.password &&
        !formik.errors.confirmPassword &&
        formik.touched.password &&
        formik.touched.confirmPassword
      ) {
        canProceed = true;
      } else {
        formik.setFieldTouched("password", true);
        formik.setFieldTouched("confirmPassword", true);
      }
    }

    if (canProceed) {
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              name="fullName"
              value={formik.values.fullName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.fullName && Boolean(formik.errors.fullName)}
              helperText={formik.touched.fullName && formik.errors.fullName}
              sx={{ mb: 3 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
            />

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
          </>
        );
      case 1:
        return (
          <>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              name="password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              sx={{ mb: 3 }}
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

            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              name="confirmPassword"
              type={showPassword ? "text" : "password"}
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
              sx={{ mb: 3 }}
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
          </>
        );
      case 2:
        return (
          <>
            <Box
              sx={{
                mb: 3,
                p: 2,
                bgcolor: "rgba(0, 0, 0, 0.04)",
                borderRadius: 1,
              }}
            >
              <Typography variant="subtitle1" gutterBottom>
                Account Summary
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="body2" color="text.secondary">
                    Full Name:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2" fontWeight="medium">
                    {formik.values.fullName}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" color="text.secondary">
                    Email:
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body2" fontWeight="medium">
                    {formik.values.email}
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            <FormControlLabel
              control={
                <Checkbox
                  name="agreeTerms"
                  checked={formik.values.agreeTerms}
                  onChange={formik.handleChange}
                  color="primary"
                />
              }
              label={
                <Typography variant="body2">
                  I agree to the{" "}
                  <Typography
                    component="span"
                    variant="body2"
                    color="primary"
                    sx={{ cursor: "pointer" }}
                    onClick={() => toast.info("Terms of Service coming soon!")}
                  >
                    Terms of Service
                  </Typography>{" "}
                  and{" "}
                  <Typography
                    component="span"
                    variant="body2"
                    color="primary"
                    sx={{ cursor: "pointer" }}
                    onClick={() => toast.info("Privacy Policy coming soon!")}
                  >
                    Privacy Policy
                  </Typography>
                </Typography>
              }
              sx={{ mb: 3 }}
            />
            {formik.touched.agreeTerms && formik.errors.agreeTerms && (
              <Typography
                color="error"
                variant="caption"
                sx={{ mb: 2, display: "block" }}
              >
                {formik.errors.agreeTerms}
              </Typography>
            )}
          </>
        );
      default:
        return null;
    }
  };

  if (completed) {
    return (
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          p: 2,
        }}
      >
        <Paper
          elevation={10}
          sx={{
            p: 4,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <CheckCircle color="success" sx={{ fontSize: 60, mb: 2 }} />
          <Typography variant="h4" gutterBottom>
            Registration Successful!
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            Your account has been created successfully. Redirecting to login...
          </Typography>
          <LinearProgress />
        </Paper>
      </Container>
    );
  }

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
        {/* Left side - Form */}
        <Box sx={{ flex: "1 1 60%", p: { xs: 3, md: 5 } }}>
          <Box sx={{ maxWidth: 400, mx: "auto" }}>
            <Box sx={{ mb: 4, textAlign: "center" }}>
              <Typography
                variant="h4"
                fontWeight="bold"
                color="primary"
                gutterBottom
              >
                Create Account
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Join us today and start your journey
              </Typography>
            </Box>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>

            <form onSubmit={formik.handleSubmit}>
              {renderStepContent(activeStep)}

              <Box
                sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}
              >
                <Button
                  variant="outlined"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                  startIcon={<ArrowBack />}
                >
                  Back
                </Button>
                {activeStep === steps.length - 1 ? (
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading || !formik.values.agreeTerms}
                    sx={{
                      py: 1,
                      px: 3,
                      borderRadius: 2,
                      background:
                        "linear-gradient(90deg, #4568dc 0%, #b06ab3 100%)",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #3f5bd5 0%, #a55ba8 100%)",
                      },
                    }}
                  >
                    {loading ? "Creating Account..." : "Complete Signup"}
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    endIcon={<ArrowForward />}
                    sx={{
                      py: 1,
                      px: 3,
                      borderRadius: 2,
                      background:
                        "linear-gradient(90deg, #4568dc 0%, #b06ab3 100%)",
                      "&:hover": {
                        background:
                          "linear-gradient(90deg, #3f5bd5 0%, #a55ba8 100%)",
                      },
                    }}
                  >
                    Next
                  </Button>
                )}
              </Box>
            </form>

            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Typography
                  component="span"
                  variant="body2"
                  color="primary"
                  sx={{ cursor: "pointer", fontWeight: "bold" }}
                  onClick={() => navigate("/")}
                >
                  Sign in
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>

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
              Join Us Today
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{ mb: 4, zIndex: 1 }}
            >
              Create your account and unlock all features of our platform.
            </Typography>
            <Box sx={{ zIndex: 1, width: "100%", maxWidth: 300 }}>
              <Typography variant="body2" align="center" sx={{ mt: 4 }}>
                Step {activeStep + 1} of {steps.length}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={(activeStep / (steps.length - 1)) * 100}
                sx={{ mt: 1, mb: 4, height: 8, borderRadius: 4 }}
              />
            </Box>
          </Box>
        )}
      </Paper>
    </Container>
  );
}

export default Signup;
