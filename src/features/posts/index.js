import React from "react";
// Component imports
import { Post } from "./components/Post";
import { Loader } from "../../components/Loader";
import { Error } from "../../components/Error";
// utility imports
import { colorPicker } from "./utils";
// service imports
import { useGetPostsQuery } from "./api/getPostsRTK";
import { Heading } from "../../components/Heading";
import { LayoutContainer } from "../../components/LayoutContainer/styles";
import { Grid } from "./components/Grid";

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
      <LayoutContainer>
        <Heading> Posts</Heading>
        <Grid>
          {data.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              body={post.body}
              color={colorPicker(post.id)}
            />
          ))}
        </Grid>
      </LayoutContainer>
    );
  }
  return <Loader />;
};

export { Posts };
