import { Paper, Typography } from "@mui/material";
import React from "react";
import { HomeIcon } from "../HomeIcon";

const Post = ({ title, body, color }) => {
  return (
    <Paper sx={{ borderRadius: "8px", padding: "1rem" }} elevation={1}>
      <HomeIcon color={color} />
      <Typography
        variant="h2"
        mb={"8px"}
        sx={{
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "2",
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body"
        sx={{
          display: "-webkit-box",
          overflow: "hidden",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: "2",
        }}
      >
        {body}
      </Typography>
    </Paper>
  );
};

export { Post };
