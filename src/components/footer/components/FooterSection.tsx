import React from "react";
import { Box, Typography, Link } from "@mui/material";

interface FooterSectionProps {
  title: string;
  links: { label: string; href: string }[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title="", links=[] }) => {
  return (
    <Box >
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {title}
      </Typography>
      {links?.map((link, index) => (
        <Typography key={index} variant="body2" sx={{ mb: 1 }}>
          <Link href={link?.href} color="inherit" underline="hover">
            {link?.label}
          </Link>
        </Typography>
      ))}
    </Box>
  );
};

export default FooterSection;
