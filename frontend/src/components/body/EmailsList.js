import * as React from "react";
import Box from '@mui/material/Box';
import { FixedSizeList } from "react-window";
import Email from "./Email";

export default function EmailsList({ inboxEmailsList }) {
  const renderRow = ({ index, style }) => {
    const email = inboxEmailsList[index];
    return (
      <div style={style} key={index}>
        <Email
          from={email.from}
          to={email.to}
          cc={email.cc}
          subject={email.subject}
          text={email.text}
          time={email.time}
        />
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
        itemCount={inboxEmailsList.length}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
