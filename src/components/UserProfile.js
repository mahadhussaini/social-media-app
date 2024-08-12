// src/components/UserProfile.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Grid,
  Button,
  Box,
} from "@mui/material";

function UserProfile() {
  const instagramUrl = "https://www.instagram.com/mahad._.hussaini"; // Replace with your Instagram URL

  return (
    <Card sx={{ mb: 2, width: "100%", borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Avatar
              sx={{
                width: 80,
                height: 80,
                border: "2px solid #3f51b5", // Add border color
                boxShadow: 2, // Add shadow for emphasis
              }}
              src="https://scontent.cdninstagram.com/v/t51.2885-19/453199447_1130467268029759_8449102876320953606_n.jpg?stp=dst-jpg_p206x206&_nc_cat=111&ccb=1-7&_nc_sid=fcb8ef&_nc_ohc=clewihgGdcUQ7kNvgEBfXtD&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AYDLxXfdXOxZw1AZm04tHRy0rk2pLkggQCn4T-DlR62ubw&oe=66C017B3"
              alt="User Profile"
            />
          </Grid>
          <Grid item xs>
            <Typography variant="h6" component="div" sx={{ mb: 1 }}>
              Mahad Arshad
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              @mahad._.hussaini
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              97 Followers • 90 Following
            </Typography>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Button
                variant="outlined"
                color="primary"
                sx={{ borderRadius: 1 }}
                href={instagramUrl} // Link to Instagram profile
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security improvement
              >
                View Profile
              </Button>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default UserProfile;
