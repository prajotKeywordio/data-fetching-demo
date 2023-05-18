import React from "react";
// MUI imports
import { Box, Container, Typography } from "@mui/material";
// Component imports
import { Post } from "./components/Post";
import { Loader } from "../../components/Loader";
import { Error } from "../../components/Error";
// utility imports
import { colorPicker } from "./utils";
// service imports
import { useGetPostsQuery } from "./api/getPostsRTK";

const Posts = () => {
  const { data, isLoading, isError, isSuccess } = useGetPostsQuery();

  if (isError) {
    <Error />;
  }

  if (isLoading) {
    <Loader />;
  }

  if (isSuccess) {
    return (
      <Container sx={{ paddingTop: "2.75rem", paddingBottom: "2.75rem" }}>
        {/* heading */}
        <Typography variant="h1" sx={{ mb: "1.5rem" }}>
          Posts
        </Typography>

        <Box
          sx={{
            display: "grid",
            gap: "1rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {data.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              color={colorPicker(post.id)}
            />
          ))}
        </Box>
      </Container>
    );
  }
  return <Loader />;
};

export { Posts };
