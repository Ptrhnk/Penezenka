import React, { useState } from "react";

import TransactionList from "../TransactionList";
import withTransactions from "../withTransactions";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import FilterButtonGroup from "../FilterButtonGroup";
import WideButton from "../WideButton";
import TransactionForm from "../TransactionForm";
import Modal from "../Modal";
import AddIcon from "../../icons/add.svg";

const TransactionPage = ({ transactions, setTransactions }) => {
  const [showedList, setShowedList] = useState(transactions);
  const [transactionList, setTransactionList] = useState(transactions);
  const [filter, setFilter] = useState("all");
  const [modalOpened, setModalOpened] = useState(false);

  const addTransaction = transaction => {
    const newId = transactionList.length
      ? transactionList[transactionList.length - 1].id + 1
      : 1;
    const newList = [...transactionList, transaction];

    transaction.id = newId;

    setTransactionList(newList);
    setTransactions(newList);
    setShowedList(getFilteredTransactions(filter, newList));
    setModalOpened(false);
  };

  const deleteTransaction = id => {
    const array = transactionList.filter(transaction => transaction.id !== id);
    setTransactionList(array);
    setTransactions(array);
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

  return (
    <>
      <Header>
        <FilterButtonGroup
          setTransactionFilter={setTransactionFilter}
          selected={filter}
          filterTypes={["in", "out", "all"]}
        />
      </Header>
      <Content id={"screen"}>
        <TransactionList
          transactions={showedList}
          onDelete={deleteTransaction}
        />
      </Content>
      <Footer>
        <WideButton
          onClick={() => setModalOpened(true)}
          label={"add transaction"}
          icon={AddIcon}
        />
      </Footer>
      <Modal
        isOpen={modalOpened}
        onRequestClose={() => setModalOpened(false)}
        appElement={document.getElementById("screen")}
        component={<TransactionForm addTransaction={addTransaction} />}
      />
    </>
  );
};

export default withTransactions(TransactionPage);
