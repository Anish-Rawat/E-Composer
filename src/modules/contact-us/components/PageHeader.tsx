import { Box, Typography } from "@mui/material";
import React from "react";

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ title="", subtitle="" }) => {
  return (
    <Box
      sx={{
        minHeight: "80px",
        width: "100%",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        fontWeight="bold"
        sx={{ fontSize: { xs: "24px", md: "40px" } }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        color="white"
        sx={{ fontSize: { xs: "14px", md: "18px" } }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {subtitle}
      </Typography>
    </Box>
  );
};

export default PageHeader;
