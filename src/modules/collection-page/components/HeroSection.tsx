import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { COLLECTION_HERO_BG_IMG } from '../../../utils/iconLinks';

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${COLLECTION_HERO_BG_IMG})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: {xs:"50vh" , md:'70vh'}, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Container 
        maxWidth="md" 
        sx={{ 
          textAlign: 'center',
          color: '#fff', 
          px: { xs: 2, sm: 4, md: 6 }, 
        }}
        data-aos="fade-up"
      data-aos-duration="1000"
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontWeight: 'bold',
            mb: 2,
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, 
            lineHeight: 1.2, 
          }}
        >
          Furnish Your Home <br /> with Our Collection
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
            mb: 4,
            fontSize: { xs: '1rem', sm: '1.25rem' }, 
          }}
        >
          Discover the Perfect Piece for Every Room in Your Home.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
