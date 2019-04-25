import React, { useState } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
// components
import Transaction from "./components/Transaction";
import FilterButton from "./components/FilterButton";
import MainButton from "./components/MainButton";
import AddButton from "./components/AddButton";
import SummaryBox from "./components/SummaryBox";
// Icons
import arrowUp from "./icons/arrow_upward.svg";
import arrowDown from "./icons/arrow_downward.svg";
import menuIcon from "./icons/menu_icon.svg";

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

const MainButtonGroup = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: var(--main-button-height);

  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FilterButtonGroup = styled.div`
  position: absolute;
  top: var(--main-button-height);
  right: 0;
  width: 100%;
  height: var(--filter-panel-height);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;

  display: flex;
  justify-content: space-around;
  /* justify-content: center; */
  align-items: center;
`;

const TransactionList = styled.div`
  position: absolute;
  /* calc main button height + filter panel height */
  top: calc(var(--main-button-height) + var(--filter-panel-height));
  bottom: var(--add-button-height);
  left: 0;
  width: 100%;
  overflow-y: scroll;
  padding: var(--transaction-box-margin) var(--transaction-box-margin) 0
    var(--transaction-box-margin);
  border-top: 2px solid black;
  border-bottom: 2px solid black;

  display: flex;
  flex-direction: column;
`;

const AddButtonGroup = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: var(--add-button-height);
  box-shadow: 0px -3px 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SummaryList = styled.div`
  position: absolute;
  top: var(--main-button-height);
  bottom: 0;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const initialList = [
  {
    id: 1,
    name: "Nákup Albert",
    value: 1231,
    type: "Příjem",
    created: "12.3.2018",
    currency: "CZK"
  },
  {
    id: 2,
    name: "Koncert",
    value: 343,
    type: "Příjem",
    created: "30.1.2018",
    currency: "EUR"
  },
  {
    id: 3,
    name: "Mimořádné výdaje",
    value: 23,
    type: "Výdaj",
    created: "2.3.2018",
    currency: "USD"
  },
  {
    id: 4,
    name: "Něco dalšího",
    value: 12323,
    type: "Výdaj",
    created: "1.1.2018",
    currency: "USD"
  }
];

const App = () => {
  const [transactionList, setTransactionList] = useState(initialList);
  const [transactionScreen, setTransactionScreen] = useState(true);

  const addTransaction = () => {
    const newId = transactionList.length
      ? transactionList[transactionList.length - 1].id + 1
      : 1;
    const newObject = {
      id: newId || 1,
      name: "Výplata",
      type: "Příjem",
      created: "2.2.2019",
      value: Math.floor(Math.random() * 20000),
      currency: "EUR"
    };
    setTransactionList([...transactionList, newObject]);
  };

  const deleteTransaction = id => {
    const array = [...transactionList];
    const index = array.findIndex(x => x.id === id);
    if (index !== -1) {
      array.splice(index, 1);
      setTransactionList(array);
    }
  };

  return (
    <Container>
      <GlobalStyle />

      <Wallet>
        <MainButtonGroup>
          <MainButton
            label={"Transakce"}
            onClick={() => setTransactionScreen(true)}
            focus={transactionScreen}
            leftButton
          />
          <MainButton
            label={"Přehledy"}
            onClick={() => setTransactionScreen(false)}
            focus={!transactionScreen}
          />
        </MainButtonGroup>

        {transactionScreen ? (
          <>
            <FilterButtonGroup>
              <FilterButton label={"Příjmy"} icon={arrowUp} />
              <FilterButton label={"Výdaje"} icon={arrowDown} />
              <FilterButton label={"Vše"} icon={menuIcon} />
            </FilterButtonGroup>
            <TransactionList>
              {transactionList
                .map(({ id, name, value, type, created, currency }, key) => (
                  <Transaction
                    key={key}
                    id={id}
                    name={name}
                    value={value}
                    type={type}
                    created={created}
                    currency={currency}
                    onDelete={() => deleteTransaction(id)}
                  />
                ))
                .reverse()}
            </TransactionList>
            <AddButtonGroup>
              <AddButton onClick={addTransaction} label={"Add new"} />
            </AddButtonGroup>
          </>
        ) : (
          <SummaryList>
            <SummaryBox level={"in"} />
            <SummaryBox level={"out"} />
            <SummaryBox level={"all"} />
          </SummaryList>
        )}
      </Wallet>
    </Container>
  );
};

export default App;
