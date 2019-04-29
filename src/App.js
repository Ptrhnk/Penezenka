import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
// import ReactModal from "react-modal";
// init list
import initialList from "./InitialList";
// components
import TransactionList from "./components/TransactionList";
import SummaryPage from "./components/SummaryPage";
import FilterButtonGroup from "./components/FilterButtonGroup";
import IntervalButtonGroup from "./components/IntervalButtonGroup";
import WideButton from "./components/WideButton";
import ReactModal from "./components/Modal";
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

  const addNewTransaction = transaction => {
    const newId = transactionList.length
      ? transactionList[transactionList.length - 1].id + 1
      : 1;
    transaction.id = newId;
    console.log(transaction);
    const newList = [...transactionList, transaction];
    setTransactionList(newList);
    // callback?
    setShowedList(getFilteredTransactions(filter, newList));
    setModalOpened(false);
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
      <Wallet id={"wallet"}>
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
        <BottomButtonGroup>
          <Switch>
            <Route path="/summary" component={BackButton} />
            <Route exact path="/" component={AddButton} />
            <Route render={() => <h1>this route does not exist</h1>} />
          </Switch>
        </BottomButtonGroup>
      </Wallet>
      <ReactModal
        isOpen={modalOpened}
        onRequestClose={() => setModalOpened(false)}
        parentSelector={getParent}
        addTransaction={addNewTransaction}
        appElement={document.getElementById("screen")}
      />
    </Container>
  );
};

export default App;
