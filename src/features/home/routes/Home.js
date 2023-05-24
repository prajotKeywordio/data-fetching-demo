import React from "react";
import { LayoutContainer } from "../../../components/LayoutContainer/styles";
import { Heading } from "../../../components/Heading";
import { LinkButton } from "../../../components/LinkButton";
const Home = () => {
  return (
    <LayoutContainer>
      <Heading>Home</Heading>
      <LinkButton>
        Posts
      </LinkButton>
    </LayoutContainer>
  );
};

export { Home };
