import React from "react";
import { HomeIcon } from "../HomeIcon";
import { Body, Wrapper, Title } from "./styles";

const Post = ({ title, body, color }) => {
  return (
    <Wrapper>
      <HomeIcon color={color} />
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Wrapper>
  );
};

export { Post };
