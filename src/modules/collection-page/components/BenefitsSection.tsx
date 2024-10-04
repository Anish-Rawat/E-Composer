import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { collectionFeatures } from '../../../utils/mockData';

const CollectionFeatures: React.FC = () => {

  return (
    <Box sx={{ bgcolor: '#f8f8e5', py: 8 }} >
      <Grid container spacing={4} justifyContent="center" data-aos="zoom-in">
        {collectionFeatures?.map((feature, index) => (
          <Grid item xs={12} sm={4} key={index} textAlign="center">
            <img src={feature.icon} alt={feature.title} style={{ width: 60, height: 60 }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 2 }}>
              {feature?.title}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              {feature?.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CollectionFeatures;
