import Header from "./header/Header";
import Body from "./body/Body";
import { Container } from "@mui/material";

export default function EmailPage() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Body />
    </Container>
  );
}
