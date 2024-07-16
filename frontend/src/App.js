import { useEffect, useState } from 'react';
import './App.css';
import EmailPage from './components/EmailPage';
const mail = require('./MailExample.json')

function App() {
  const [inboxEmailsList, setInboxEmailsList] = useState([]);
  const [outboxEmailsList, setOutEmailsList] = useState([]);
  const [draftEmailsList, setDraftEmailsList] = useState([]);

  useEffect(() => {
    setInboxEmailsList(mail);
  }, [])

  return (
    <div className="App">
      <EmailPage inboxEmailsList={inboxEmailsList} />
    </div>
  );
}

export default App;
