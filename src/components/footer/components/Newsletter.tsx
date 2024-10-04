import React, { useState } from "react";
import { Box, TextField, Button, InputAdornment } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Subscribed with email:", email);
    setEmail("");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "row",
        mt: 2,
        maxWidth: "100%",
      }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MailOutlineIcon />
            </InputAdornment>
          ),
        }}
        sx={{ flexShrink: 1 }}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          backgroundColor: "black",
          color: "white",
          minWidth: "120px",
          whiteSpace: "nowrap", 
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
};

export default Newsletter;
