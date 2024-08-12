import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Notifications() {
  const notifications = [
    { id: 1, message: "Hamoud liked your post.", user: "Hamoud" },
    { id: 2, message: "Asad commented on your photo.", user: "Asad" },
    { id: 3, message: "Sarmad followed you.", user: "Sarmad" },
  ];

  return (
    <Card
      sx={{
        mb: 2,
        width: "100%",
        maxHeight: 300,
        overflow: "auto",
        position: "relative",
      }}
    >
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          <NotificationsIcon sx={{ verticalAlign: "middle", mr: 1 }} />
          Notifications
        </Typography>
        <List>
          {notifications.map(({ id, message, user }) => (
            <React.Fragment key={id}>
              <ListItem>
                <ListItemText primary={message} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default Notifications;
