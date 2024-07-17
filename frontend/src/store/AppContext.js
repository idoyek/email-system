import React, { createContext, useState } from 'react';

export const UserContext = createContext();
export const EmailsContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [emailsList, setEmailsList] = useState([]);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <EmailsContext.Provider value={{ emailsList, setEmailsList }}>
        {children}
      </EmailsContext.Provider>
    </UserContext.Provider>
  );
};
