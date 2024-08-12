import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./styles/theme";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Router>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minHeight: "100vh",
              backgroundColor: theme.palette.background.default,
              backgroundImage: `url('https://lh3.googleusercontent.com/fife/ALs6j_F4gaQIZfNXd9MGB8starp4256TYZMJK65PuRUOuUp9gNWZUgI2VcTjiNvnid1zJqp_5xsmbPup16htBdZxUdhA2C0Y57Uje-eEM-O9XjazdVXssl_5rPq_YSwlMGdvyMLNrxcgQQBypjO16MSfBRSba_eKWH-DaNG5DZUdq3byY4RIW34hrTCZH_v9_Zn5gqaU6iWHWUgM9WpbHvgHVC4nP4_HKHb3B24sr6kpLRh8xcIOiyfBm52rUxOth6I-g6TVsjmc8RtqHPpkl7r2n0cRLlDHndOzjenTvqeWSU9sh8qFIbpBByQ5vJjpu_-hL3e6ZwXuobcRMaf5HC1AFo60g3RdqWhbDZ0P3S6YYyDCFopzNjEhSFS5a6itkN2gohlgx5acbLtW71ke-f0hT2qHFFaAaq3Dh-1je3Rxy7t2zF_6LjQ688nUmIOkKS2TeBSH7fujvsYTkoO5UKBt8hLcZGot3Sou4CJXVkitRm2gFsZ-CxQeMhK2B4cK3J_9LU8ar6fFtQFhR_IMw2srFw6_rUytZbmy_dRuPrwF1zaEhnjoLp8N2aJo7f8xJJb-VbmhqODKOB0BnmXR-11EqOh8VQgjwyHbBI0_fO6SIFIPZ56XQjBgKkcQQrODqOt-FEt5zMJ8jFMkOkoNxTM3QC5AY2GAZHHohkU1euVMRvItDOk9ENZDlwJSNSkyyq_Faq1j0MpiTPEoK-z_AruxGqNK3feR8UjWaYRsa59D5U9AiNEt_HWJxTelPzSNawqy21-kzY1Zc0ODL2d66qLtTz--Vq4r8-oYvzE--3yIqpad_8aFH4NCIkoGyA8AeTby_dAcG2UHj-EENxjq3PnTuY80yD8UfjuhkG0Z8bMhAA40jHo1_uVEmSLmE3wtu9gCmj4i6ZjBNt2xv7TVqbWjpHk4BsAxLc2VtXVrzAoMKtWvjWQ-dWh54liiROFMb-9FAXwzMA82E2YAgzU2NU-VCH5XkieKr3Mca9no03kAPcMGiIBeekcCLoTjsusFo4gkN59FIOzkpMD_L9AjvFIDaDng_u6DajRQV4kavAc0-BcBGKXZ0r9BZxFrL3VZ1L3a9r9tXwEYD_qzx2iFJYpYPyCBOwo22gotyxMTnNyEDSdM95LMgyJU-FCF05RFigS0A76MwDDOMebLssrLTniuDJrwc5yGxp3dbnbqv_wUxL5cPIhqaTemmja2RPIMecAl_agq4QEVvvA8ksQgRIeWx_RbJQtX58ObLrsDUAMMn4dtC1HqAvm8Kw8xQx5GoRXzwczVxgVxSMiaDMksuBf7QT0=s512')`, // Background image
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
              backgroundPosition: "center",
            }}
          >
            <Navbar />
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                p: 3,
                mt: 8,
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <Container>
                <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignupPage />} />
                  <Route
                    path="/dashboard"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/"
                    element={
                      <ProtectedRoute>
                        <Dashboard />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </Container>
            </Box>
            <Footer />
          </Box>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
