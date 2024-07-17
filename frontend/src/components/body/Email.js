import * as React from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import UserLogo from "../header/UserLogo";

export default function Email({ mail, setSelectedMail }) {
  const { from, to, cc, subject, text, time } = mail;
  const handleSelectedMail = () => {
    setSelectedMail(mail);
  };
  return (
    <Box sx={{ maxHeight: "200px", overflowY: "auto", padding: 0 }}>
      <ListItem onClick={handleSelectedMail} alignItems="flex-start">
        <ListItemAvatar>
          <UserLogo />
          {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" /> */}
        </ListItemAvatar>
        <ListItemText
          primary={
            <Grid container spacing={2}>
              <Grid item xs={9}>
                <Typography
                  component="span"
                  variant="body1"
                  color="text.primary"
                  sx={{ fontWeight: "bold" }}
                >
                  {from}
                </Typography>
                <Typography
                  component="div"
                  variant="body2"
                  color="primary"
                  sx={{ fontWeight: "bold" }}
                >
                  {subject}
                </Typography>
                <Typography
                  component="div"
                  variant="body2"
                  color="text.secondary"
                >
                  {text}
                </Typography>
              </Grid>
              <Grid
                item
                xs={3}
                container
                justifyContent="flex-end"
                alignItems="center"
              >
                <Typography variant="body2" color="text.secondary">
                  {time}
                </Typography>
              </Grid>
            </Grid>
          }
        />
      </ListItem>
      <Divider sx={{ marginY: 0 }} />
    </Box>
  );
}
