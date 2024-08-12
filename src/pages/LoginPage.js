// src/pages/LoginPage.js
import React, { useState, useContext } from "react";
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
import { AuthContext } from "../context/AuthContext";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    if (!userName || !password) {
      setError("Both fields are required.");
      setLoading(false);
      return;
    }

    try {
      // Replace with actual authentication logic
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulate successful login
      login(); // Update authentication context
      navigate("/"); // Redirect to the home page
    } catch (err) {
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} sx={{ padding: 4, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
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
              error={!!error && !userName}
              helperText={
                !userName && error.includes("Both fields are required.")
                  ? error
                  : ""
              }
              sx={{ mb: 2 }}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              required
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!error && !password}
              helperText={
                !password && error.includes("Both fields are required.")
                  ? error
                  : ""
              }
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
              {loading ? <CircularProgress size={24} /> : "Login"}
            </Button>
          </Box>
        </form>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Typography variant="body2">
            {"Don't have an account? "}
            <Link href="/signup" underline="hover" color="primary">
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}

export default LoginPage;
