import React from "react";
import { Typography } from "@mui/material";

const Heading = ({ children }) => {
  return (
    <Typography variant="h1" sx={{ mb: "1.5rem" }}>
      {children}
    </Typography>
  );
};

export { Heading };
