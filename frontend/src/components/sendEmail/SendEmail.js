import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import HttpRequests from "../../httpRequests/HttpRequests";
import { UserContext, EmailsContext } from "../../store/AppContext";
import { useContext } from "react";
import moment from "moment";

export default function SendEmail({ open, handleClose }) {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { currentUser } = useContext(UserContext);
  const { setEmailsList } = useContext(EmailsContext);

  const handleSend = async () => {
    try {
      const now = moment();
      const time = now.format("hh:mm A");

      const mail = {
        from: `${currentUser.firstName} ${currentUser.lastName}`,
        to: recipient,
        cc: "cc",
        subject: subject,
        text: message,
        time: time,
      };
      await HttpRequests.addNewMail(mail);
      //handle success
      setEmailsList((prevState) => [...prevState, mail]);
      setRecipient("");
      setSubject("");
      setMessage("");
      handleClose();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("An error occurred while sending the email. Please try again.");
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>
        Send Email
        <IconButton
          edge="end"
          color="inherit"
          aria-label="close"
          onClick={handleClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="recipient"
          label="Recipient Email"
          type="email"
          fullWidth
          variant="outlined"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        <TextField
          margin="dense"
          id="subject"
          label="Subject"
          type="text"
          fullWidth
          variant="outlined"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          margin="dense"
          id="message"
          label="Message"
          type="text"
          fullWidth
          variant="outlined"
          multiline
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSend}>Send</Button>
      </DialogActions>
    </Dialog>
  );
}
