// src/components/PostForm.js
import React, { useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";

function PostForm() {
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission
    console.log("Post submitted:", content);
    setContent("");
  };

  return (
    <Card sx={{ mb: 2, width: "100%", borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          Create a New Post
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <TextField
            fullWidth
            multiline
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            variant="outlined"
            placeholder="What's on your mind?"
            sx={{ mb: 2, borderRadius: 1 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ borderRadius: 1, padding: 1.5 }}
          >
            Post
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}

export default PostForm;
