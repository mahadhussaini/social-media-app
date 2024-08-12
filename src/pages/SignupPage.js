// src/pages/SignupPage.js
import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Link,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    if (!userName || !password || !confirmPassword) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      // Replace this with actual signup logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Signup:", { userName, password });
      navigate("/login"); // Redirect to login page after signup
    } catch (err) {
      setError("Signup failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSignup}>
          <Box sx={{ mt: 2 }}>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}
            <TextField
              label="User Name"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              autoComplete="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              sx={{ mb: 2 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2, py: 1.5 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Sign Up"}
            </Button>
          </Box>
        </form>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography variant="body2">
            {"Already have an account? "}
            <Link href="/login" underline="hover" color="primary">
              Login
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default SignupPage;
