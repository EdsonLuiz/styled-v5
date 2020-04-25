import React from "react";
// import { Button } from "./common/";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body {
    background-color: #ddd;
    min-height: 100vh;
    margin: 0;
    color: #000;
    font-family: 'Kaushan Script', cursive;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
