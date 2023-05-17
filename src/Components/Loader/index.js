import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

const Loader = () => {
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
      <CircularProgress />
      <Typography variant="h2">Loading</Typography>
    </Box>
  );
};

export { Loader };
