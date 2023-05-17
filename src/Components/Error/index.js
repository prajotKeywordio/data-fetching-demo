import { ErrorOutlineRounded } from "@mui/icons-material";
import { Box,  Typography } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        inset: "0px",
        display: "grid",
        placeContent: "center",
        justifyItems: "center",
        gap: '8px'
      }}
    >
      <ErrorOutlineRounded sx={{color: 'error.main', height: '48px',  width: '48px'}}/>
      <Typography variant="h2" >Could not fetch data</Typography>
    </Box>
  );
};

export { Error };
