import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import InboxIcon from '@mui/icons-material/Inbox';
import OutboxIcon from '@mui/icons-material/Outbox';
import DraftsIcon from '@mui/icons-material/Drafts'

export default function EmailDisplayButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="small" variant="extended">
        <InboxIcon sx={{ mr: 1 }} />
        Inbox
      </Fab>
      <Fab size="small" variant="extended">
        <OutboxIcon sx={{ mr: 1 }} />
        Outbox
      </Fab>
      <Fab size="small" variant="extended">
        <DraftsIcon sx={{ mr: 1 }} />
        Draft
      </Fab>
    </Box>
  );
}