import { Box, Button, TextField } from "@mui/material";
import React from "react";

const SearchBar: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      my={2}
      minHeight="50px"
      sx={{
        width: "100%", 
        maxWidth: "600px",
        borderRadius: 25,
        backgroundColor: "white",
        boxShadow: 3,
      }}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <TextField
        placeholder="Search for answers..."
        variant="outlined"
        sx={{
          marginRight: 1,
          width: "80%", 
          "& .MuiOutlinedInput-root": {
            borderRadius: 20,
            "& fieldset": {
              border: "none",
            },
          },
          pl: "20px",
        }}
      />
      <Button
        variant="contained"
        sx={{
          width: "20%", 
          borderRadius: 20,
          backgroundColor: "#000000",
          color: "#ffffff",
          fontWeight: "bold",
          padding: {xs:"10px 20px",md:"10px 20px"},
          margin: "7px",
          textTransform: "uppercase",
          "&:hover": {
            backgroundColor: "#333333",
          },
        }}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
