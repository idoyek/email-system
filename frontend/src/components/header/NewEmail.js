import Fab from '@mui/material/Fab';
import EmailIcon from '@mui/icons-material/Email';

export default function NewEmail({setShowNewEmailPopUp}) {
    const handleNewEmailButton = () =>{
        setShowNewEmailPopUp(prevState => !prevState)
    }
  return (
    <Fab onClick={handleNewEmailButton} size="small" variant="extended">
      <EmailIcon sx={{ mr: 1 }} />
      New Email
    </Fab>
  );
}
