import { Box } from "@mui/material";
import React from "react";

const BaseIcon = ({Icon, color = 'blue'}) => {
  return (
    <Box
      sx={{
        backgroundColor: `${color}.background`,
        borderRadius: "2px",
        display: 'grid',
        height: '24px',
        marginBottom: "8px",
        placeItems: 'center',
        width: '24px',
      }}
    >
      <Icon
        sx={{
          color: `${color}.main`,
          fontSize: '18px',
        }}
      />
    </Box>
  );
};

export { BaseIcon };
