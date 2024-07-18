import Header from "./header/Header";
import Body from "./body/Body";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import SendEmail from "./sendEmail/SendEmail";
import { EmailsContext, UserContext } from "../store/AppContext";
import { useContext } from "react";
import HttpRequests from "../httpRequests/HttpRequests";

export default function EmailPage() {
  const [showNewEmailPopUp, setShowNewEmailPopUp] = useState(false);
  const handleOpen = () => setShowNewEmailPopUp(true);
  const handleClose = () => setShowNewEmailPopUp(false);
  const { setEmailsList } = useContext(EmailsContext);
  const { currentUser } = useContext(UserContext)
  const [selectedEmailCategory, setSelectedEmailCategory] = useState("inbox")

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const mails = await HttpRequests.getMails(currentUser, selectedEmailCategory);
        setEmailsList(mails);
      } catch (error) {
        console.error("Error fetching mails:", error);
      }
    };

    fetchEmails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedEmailCategory]);

  return (
    <Container maxWidth="lg">
      {showNewEmailPopUp && <SendEmail open={showNewEmailPopUp} handleClose={handleClose} />}
      <Header setShowNewEmailPopUp={handleOpen} setSelectedEmailCategory={setSelectedEmailCategory}/>
      <Body />
    </Container>
  );
}