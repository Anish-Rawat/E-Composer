import React from "react";
import { Box, Typography, Link } from "@mui/material";

interface ContactPlatformProps {
  label: string;
  linkText: string;
  href: string;
  icon: string;
}

const ContactPlatform: React.FC<ContactPlatformProps> = ({
  label,
  linkText,
  href,
  icon,
}) => {
  return (
    <Box textAlign="center" pr="40px" >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection={{ xs: "column", md: "row" }}
        sx={{
          img: {
            width: { xs: "50px", md: "60px" }, 
            height: "50%", 
            objectFit: "contain",
          },
        }}
      >
        <img src={icon} alt={label} />
      </Box>

      <Typography
        variant="h6"
        fontWeight="bold"
        fontFamily="sans-serif"
        fontSize="24px"
        color="#373737"
      >
        {label}
      </Typography>

      <Link
        href={href}
        color="#373737"
        fontFamily="sans-serif"
        fontSize="20px"
        underline="always"
        pt="10px"
      >
        {linkText}
      </Link>
    </Box>
  );
};

export default ContactPlatform;
