import { Box } from "@mui/material";
import NewEmail from "./NewEmail";
import UserLogo from "./UserLogo";

export default function RightButtons({setShowNewEmailPopUp}) {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <NewEmail setShowNewEmailPopUp={setShowNewEmailPopUp} />
      <UserLogo />
    </Box>
  );
}
