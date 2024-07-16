import Header from "./header/Header";
import Body from "./body/Body";
import { Container } from "@mui/material";

export default function EmailPage({inboxEmailsList}) {
  return (
    <Container maxWidth="lg">
      <Header />
      <Body inboxEmailsList={inboxEmailsList}/>
    </Container>
  );
}
