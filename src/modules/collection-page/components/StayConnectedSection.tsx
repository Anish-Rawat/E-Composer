import React from 'react';
import { Box, Typography, Container, TextField, InputAdornment, IconButton, Grid } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { COLLECTION_Footer_IMG } from '../../../utils/iconLinks';

const StayConnectedSection: React.FC = () => {
  return (
    <Box sx={{ width: '100%', }}>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              backgroundImage: `url(${COLLECTION_Footer_IMG})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: { xs: '200px', md: '400px' },
            }}
          />
        </Grid>

        <Grid item xs={12} md={6} py={{xs:4}}>
          <Container maxWidth="sm" sx={{ textAlign: 'left' }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 'bold' }}>
              Stay Connected
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary' }}>
              Keep in touch with us by subscribing to our newsletter
            </Typography>
            <TextField
              fullWidth
              placeholder="Email address"
              variant="outlined"
              sx={{
                backgroundColor: '#fff',
                borderRadius: 2,
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">
                      <MailOutlineIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StayConnectedSection;
