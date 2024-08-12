// src/components/PostCard.js
import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from "@mui/material";

function PostCard({ title, content }) {
  return (
    <Card
      sx={{
        mb: 2,
        boxShadow: 3,
        borderRadius: 2,
        transition: "0.3s",
        "&:hover": { boxShadow: 6 },
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" sx={{ mb: 1 }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: "flex-end" }}>
        <Button size="small" color="primary">
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}

export default PostCard;
