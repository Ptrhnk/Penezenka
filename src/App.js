import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
// init list
import initialList from "./InitialList";
// components
import TransactionList from "./components/TransactionList";
import SummaryPage from "./components/SummaryPage";
import FilterButtonGroup from "./components/FilterButtonGroup";
import IntervalButtonGroup from "./components/IntervalButtonGroup";
import WideButton from "./components/WideButton";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReactModal from "./components/Modal";
// icons
import AddIcon from "./icons/add.svg";
import BackIcon from "./icons/arrow_back.svg";

import { transactionBoxMargin, headerHeight, footerHeight } from "./constants";

const Container = styled.div`
  background-color: black;
  height: 100vh;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Wallet = styled.div`
  position: relative;
  width: 40%;
  height: 100%;
  background-color: rgb(0, 169, 255);
`;

const Screen = styled.div`
  position: absolute;
  top: ${headerHeight};
  bottom: ${footerHeight};
  left: 0;
  width: 100%;
  overflow-y: scroll;
  padding: ${transactionBoxMargin} ${transactionBoxMargin} 0
    ${transactionBoxMargin};
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [showedList, setShowedList] = useState(initialList);
  const [transactionList, setTransactionList] = useState(initialList);
  const [filter, setFilter] = useState("all");
  const [interval, setInterval] = useState("all");
  const [modalOpened, setModalOpened] = useState(false);

  const AddButton = () => (
    <WideButton
      onClick={() => setModalOpened(true)}
      label={"Add new"}
      icon={AddIcon}
    />
  );

  const BackButton = props => (
    <WideButton
      onClick={() => props.history.push("/")}
      label={"Back"}
      bgColor={"#00d4ff"}
      icon={BackIcon}
    />
  );

  const getParent = () => document.querySelector("#screen");

  const addTransaction = transaction => {
    const newId = transactionList.length
      ? transactionList[transactionList.length - 1].id + 1
      : 1;
    const newList = [...transactionList, transaction];

    transaction.id = newId;

    setTransactionList(newList);
    setShowedList(getFilteredTransactions(filter, newList));
    setModalOpened(false);
  };

  const deleteTransaction = id => {
    const array = transactionList.filter(transaction => transaction.id !== id);
    setTransactionList(array);
    setShowedList(getFilteredTransactions(filter, array));
  };

  const setTransactionFilter = transactionType => {
    setFilter(transactionType);
    setShowedList(getFilteredTransactions(transactionType, transactionList));
  };

  const getFilteredTransactions = (transactionType, transactions) => {
    if (transactionType !== "all") {
      return transactions.filter(
        transaction => transaction.type === transactionType
      );
    } else {
      return transactions;
    }
  };

  const setIntervalFilter = interval => setInterval(interval);

  return (
    <Container>
      <GlobalStyle />

      <Wallet id={"wallet"}>
        <Header>
          <Switch>
            <Route
              path="/summary"
              component={() => (
                <IntervalButtonGroup
                  selected={interval}
                  setIntervalFilter={setIntervalFilter}
                />
              )}
            />
            <Route
              exact
              path="/"
              component={() => (
                <FilterButtonGroup
                  setTransactionFilter={setTransactionFilter}
                  selected={filter}
                />
              )}
            />
            <Route render={() => <h1>this route does not exist</h1>} />
          </Switch>
        </Header>
        <Screen id={"screen"}>
          <Switch>
            <Route
              path="/summary"
              component={() => (
                <SummaryPage
                  transactions={transactionList}
                  interval={interval}
                />
              )}
            />
            <Route
              exact
              path="/"
              component={() => (
                <TransactionList
                  transactionList={showedList}
                  onDelete={deleteTransaction}
                />
              )}
            />
            <Route render={() => <h1>this route does not exist</h1>} />
          </Switch>
        </Screen>
        <Footer>
          <Switch>
            <Route path="/summary" component={BackButton} />
            <Route exact path="/" component={AddButton} />
            <Route render={() => <h1>this route does not exist</h1>} />
          </Switch>
        </Footer>
      </Wallet>
      <ReactModal
        isOpen={modalOpened}
        onRequestClose={() => setModalOpened(false)}
        parentSelector={getParent}
        addTransaction={addTransaction}
        appElement={document.getElementById("screen")}
      />
    </Container>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    color: ${props => (props.whiteColor ? "white" : "black")};
    letter-spacing: 1px;

    @import url('https://fonts.googleapis.com/css?family=Poppins');
    font-family: 'Poppins', sans-serif;
  }
`;
