import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import TransactionPage from "./components/pages/TransactionPage";
import SummaryPage from "./components/pages/SummaryPage";
import { globalBlue, globalShadow } from "./constants";

const Container = styled.div`
  background-color: black;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wallet = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  height: 100%;
  background-color: ${globalBlue};
  border-radius: 0.8rem;
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Wallet>
          <Switch>
            <Route path="/summary" component={SummaryPage} />
            <Route exact path="/" component={TransactionPage} />
            <Route render={() => <h1>this route does not exist</h1>} />
          </Switch>
        </Wallet>
      </Container>
    </BrowserRouter>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    @import url('https://fonts.googleapis.com/css?family=Poppins');
    font-family: 'Poppins', sans-serif;
    letter-spacing: .8px;
  }
  *, *::after, *::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 200ms ease-in-out;
  }
  .ReactModal__Overlay--after-open{
      opacity: 1;
  }
  .ReactModal__Overlay--before-close{
      opacity: 0;
  }

  .date-picker-form {
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    border: none;
    outline: none;
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 0.8rem;
    box-shadow: ${globalShadow};
    text-align: center;
  }
  .date-picker-summary {
    border-radius: 2rem;
    padding: .8rem 0.6rem;
    border: 2px solid black;
    box-shadow: ${globalShadow};
    outline: none;
    font-family: inherit;
    letter-spacing: inherit;
    text-align: center;
    margin: 1rem;
    cursor: pointer;
    font-size: inherit;
  }
`;
