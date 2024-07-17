import React, { useState } from "react";
import EmailContent from "./EmailContent";
import EmailsList from "./EmailsList";

export default function Body() {
  const [selectedMail, setSelectedMail] = useState(null);
  const containerStyle = {
    display: 'flex',
    height: '100vh',
  };

  return (
    <div style={containerStyle}>
      <EmailsList setSelectedMail={setSelectedMail}/>
      <EmailContent selectedMail={selectedMail}/>
    </div>
  );
}