import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import PostCard from "./PostCard";
import PostForm from "./PostForm";
import Notifications from "./Notifications";
import UserProfile from "./UserProfile";

function Dashboard() {
  const posts = [
    {
      id: 1,
      title: "First Post",
      content:
        "This is the content of the first post. It contains an introduction to our new features and updates for the month.",
    },
    {
      id: 2,
      title: "Second Post",
      content:
        "In this post, we discuss best practices for optimizing your workflow and productivity tips for the team.",
    },
    {
      id: 3,
      title: "Third Post",
      content:
        "Here we highlight some recent achievements and milestones reached by our team, including project completions and awards.",
    },
    {
      id: 4,
      title: "Fourth Post",
      content:
        "This post provides a deep dive into our upcoming project, detailing goals, timelines, and expected outcomes.",
    },
    {
      id: 5,
      title: "Fifth Post",
      content:
        "An insightful article about industry trends and how our company is adapting to new market demands and innovations.",
    },
  ];

  return (
    <Grid container spacing={3} padding={2}>
      <Grid item xs={12} md={4}>
        <Paper elevation={3} style={{ padding: 16 }}>
          <Typography variant="h6" gutterBottom>
            User Profile
          </Typography>
          <UserProfile />
        </Paper>
        <Paper elevation={3} style={{ padding: 16, marginTop: 16 }}>
          <Typography variant="h6" gutterBottom>
            Notifications
          </Typography>
          <Notifications />
        </Paper>
      </Grid>
      <Grid item xs={12} md={8}>
        <Paper elevation={3} style={{ padding: 16 }}>
          <Typography variant="h6" gutterBottom>
            Create a Post
          </Typography>
          <PostForm />
        </Paper>
        {posts.map((post) => (
          <Paper
            key={post.id}
            elevation={3}
            style={{ padding: 16, marginTop: 16 }}
          >
            <PostCard title={post.title} content={post.content} />
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
}

export default Dashboard;
