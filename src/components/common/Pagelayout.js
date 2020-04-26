import React from "react";
import styled from "styled-components";
import { Header } from "./Header";

const Content = styled.main`
  width: 90%;
  max-width: 800px;
  margin: 80px auto 0 auto;
  padding: 0 16px;
  font-family: "Open Sans", sans-serif;
  background-color: ${(p) => p.theme.background};
  color: ${(p) => p.theme.front};

  h1,
  h2,
  h3,
  h4 {
    font-family: "Kaushan Script", cursive;
  }
`;

export const Pagelayout = ({ children }) => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
};
