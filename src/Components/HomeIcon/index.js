import { HomeOutlined } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

const HomeIcon = ({color = 'blue'}) => {
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
      <HomeOutlined
        sx={{
          color: `${color}.main`,
          fontSize: '18px',
        }}
      />
    </Box>
  );
};

export { HomeIcon };
