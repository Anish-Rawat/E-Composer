import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

type HelpCardProps = {
  icon: string;
  title: string;
  subtitle: string;
  onClick: () => void;
};

const HelpCard: React.FC<HelpCardProps> = ({
  icon,
  title="",
  subtitle="",
}) => {
  return (
    <Card
      sx={{
        width: {
          xs: 450, 
          sm: 400, 
        },
        height: {
          xs: "auto",
          sm: "auto",
        },
        padding: {
          xs: "8px 16px",
          sm: "10px 20px",
        },
        margin: "0 16px",
        backgroundColor:'#F4F4FF',
        borderRadius:'10px'
      }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "5px",
        }}
      >
        <Box
          component="span"
          sx={{
            fontSize: { xs: "40px", sm: "50px", md: "60px" },
            img: {
              width: "50%",
              height: "50%", 
              objectFit: "contain", 
            },
          }}
        >
          <img src={icon} alt={title} />
        </Box>
        <Typography variant="h5" fontWeight='bold' gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1" color='#A6A6AD' gutterBottom>
          {subtitle}
        </Typography>
        <Typography gutterBottom>{"View More"}</Typography>
      </CardContent>
    </Card>
  );
};

export default HelpCard;
