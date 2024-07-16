import Fab from '@mui/material/Fab';
import EmailIcon from '@mui/icons-material/Email';

export default function NewEmail() {
  return (
    <Fab size="small" variant="extended">
      <EmailIcon sx={{ mr: 1 }} />
      New Email
    </Fab>
  );
}
