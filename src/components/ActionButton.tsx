import { Box, Button, Typography } from "@mui/material";
import React from "react";

type ActionButtonProps = {
  text: string;
  icon: React.ReactNode;
  onClick: () => void;
};

const ActionButton: React.FC<ActionButtonProps> = ({ text="", icon, onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="contained"
      sx={{
        backgroundColor: "black",
        borderRadius: "25px",
        padding: "8px 20px",
        display: "inline-flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        minWidth: "fit-content", 
        "&:hover": {
          backgroundColor: "#333",
        },
      }}
    >
      <Typography
        color="white"
        sx={{ marginRight: "8px", fontSize: { xs: "0.875rem", sm: "1rem" } }} 
      >
        {text}
      </Typography>
      <Box
        component="span"
        sx={{
          display: "flex",
          alignItems: "center",
          fontSize: { xs: "20px", sm: "24px" }, 
        }}
      >
        {icon}
      </Box>
    </Button>
  );
};

export default ActionButton;
