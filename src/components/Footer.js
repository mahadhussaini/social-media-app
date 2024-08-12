import React from "react";
import { Box, Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "#282c34",
        color: "#ffffff",
        borderTop: "1px solid #444c56",
        textAlign: "center",
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        © 2024 Social Pulse. All rights reserved.
      </Typography>
      <Typography variant="body2">
        <Link href="#" color="inherit" sx={{ mr: 2 }}>
          Privacy Policy
        </Link>
        <Link href="#" color="inherit">
          Contact Us
        </Link>
      </Typography>
    </Box>
  );
}

export default Footer;
