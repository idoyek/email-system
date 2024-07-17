import React from 'react';
import { Box, Typography, Paper, Grid } from '@mui/material';
import UserLogo from '../header/UserLogo';

export default function EmailContent({ selectedMail }) {
  if (!selectedMail) {
    return null;
  }

  return (
    <Paper elevation={3} sx={{ width: '100%', padding: 2, margin: 2 }}>
      <Box sx={{ borderBottom: '1px solid #ddd', paddingBottom: 1, marginBottom: 2 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={9} md={10}>
            <Grid container spacing={2} alignItems="center">
              <Grid item>
                <UserLogo />
              </Grid>
              <Grid item>
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {selectedMail.from}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    To: {selectedMail.to}
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                  {selectedMail.subject}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={3} md={2} container justifyContent="flex-end" alignItems="center">
            <Typography variant="body2" color="text.secondary">
              {selectedMail.time}
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          maxHeight: '400px',
          overflowY: 'auto',
          padding: 1,
        }}
      >
        <Typography variant="body1">{selectedMail.text}</Typography>
      </Box>
    </Paper>
  );
}
