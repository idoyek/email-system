import * as React from "react";
import Box from "@mui/material/Box";
import { FixedSizeList } from "react-window";
import Email from "./Email";
import { useContext } from "react";
import { EmailsContext } from "../../store/AppContext";

export default function EmailsList({setSelectedMail}) {
  const { emailsList } = useContext(EmailsContext);
  const renderRow = ({ index, style }) => {
    const email = emailsList[index];
    return (
      <div style={style} key={index}>
        <Email mail={email} setSelectedMail={setSelectedMail}/>
      </div>
    );
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: 400,
        maxWidth: 360,
        bgcolor: "background.paper",
      }}
    >
      <FixedSizeList
        height={450}
        width={360}
        itemSize={80}
        itemCount={emailsList.length}
        overscanCount={5}
      >
        {emailsList.length > 0 && renderRow}
      </FixedSizeList>
    </Box>
  );
}
