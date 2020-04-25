import React from "react";
// import { Button } from "./common/";
import { createGlobalStyle, ThemeProvider } from "styled-components";
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

const theme = {
  primaryColor: "#f8049c",
  secondaryColor: "#fdd54f",
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
