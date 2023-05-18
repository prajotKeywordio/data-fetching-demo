import React from "react";
import { Body, Wrapper, Title } from "./styles";
import { Icon } from "../Icon";

const Post = ({ title, body, color }) => {
  return (
    <Wrapper>
      <Icon color={color} />
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Wrapper>
  );
};

export { Post };
