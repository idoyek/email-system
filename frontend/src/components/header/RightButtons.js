import { Box } from "@mui/material";
import NewEmail from "./NewEmail";
import UserLogo from "./UserLogo";

export default function RightButtons() {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <NewEmail />
      <UserLogo />
    </Box>
  );
}
