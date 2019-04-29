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
// icons
import AddIcon from "./icons/add.svg";
import BackIcon from "./icons/arrow_back.svg";

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
  /* Variables */
  :root {
    --primary-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
    --transaction-box-margin: 1rem;
    --main-button-height: 4rem;
    --filter-panel-height: 5rem;
    --add-button-height: 4rem;
    --transaction-box-margin: .7rem;
    --primary-border: 2px solid black;
  }
`;

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

const TopButtonGroup = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: var(--filter-panel-height);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  border-bottom: var(--primary-border);

  display: flex;
  justify-content: space-around;
  /* justify-content: center; */
  align-items: center;
`;

const Screen = styled.div`
  position: absolute;
  top: var(--filter-panel-height);
  bottom: var(--add-button-height);
  left: 0;
  width: 100%;
  overflow-y: scroll;
  padding: var(--transaction-box-margin) var(--transaction-box-margin) 0
    var(--transaction-box-margin);

  display: flex;
  /* justify-content: center; */
  flex-direction: column;
`;

const BottomButtonGroup = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: var(--add-button-height);
  box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  border-top: var(--primary-border);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const App = () => {
  // actual list of transactions showed on screen
  const [showedList, setShowedList] = useState(initialList);
  // all transactions
  const [transactionList, setTransactionList] = useState(initialList);
  const [filter, setFilter] = useState("all");
  const [interval, setInterval] = useState("all");

  const AddButton = () => (
    <WideButton onClick={addTransaction} label={"Add new"} icon={AddIcon} />
  );
  const BackButton = props => (
    <WideButton
      onClick={() => props.history.push("/")}
      label={"Back"}
      bgColor={"lightblue"}
      icon={BackIcon}
    />
  );

  const addTransaction = () => {
    const newId = transactionList.length
      ? transactionList[transactionList.length - 1].id + 1
      : 1;
    const newObject = {
      id: newId || 1,
      name: "Výplata",
      value: Math.floor(Math.random() * 20000),
      type: "in",
      created: "2.2.2019",
      currency: "EUR"
    };
    const newList = [...transactionList, newObject];
    setTransactionList(newList);
    // callback?
    setShowedList(getFilteredTransactions(filter, newList));
  };

  const deleteTransaction = id => {
    const array = [...transactionList];
    const index = array.findIndex(x => x.id === id);
    if (index !== -1) {
      array.splice(index, 1);
      setTransactionList(array);
      // callback?
      setShowedList(getFilteredTransactions(filter, array));
    }
  };

  const setTransactionFilter = transactionType => {
    setFilter(transactionType);
    setShowedList(getFilteredTransactions(transactionType, transactionList));
  };

  const getFilteredTransactions = (transactionType, transactions) => {
    if (transactionType !== "all") {
      const filteredArray = transactions.filter(transaction => {
        return transaction.type === transactionType;
      });
      return filteredArray;
    } else {
      return transactions;
    }
  };

  const setIntervalFilter = interval => {
    setInterval(interval);
  };

  return (
    <Container>
      <GlobalStyle />
      <Wallet>
        <TopButtonGroup>
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
        </TopButtonGroup>
        <Screen>
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
        <BottomButtonGroup>
          <Switch>
            <Route path="/summary" component={BackButton} />
            <Route exact path="/" component={AddButton} />
            <Route render={() => <h1>this route does not exist</h1>} />
          </Switch>
        </BottomButtonGroup>
      </Wallet>
    </Container>
  );
};

export default App;
