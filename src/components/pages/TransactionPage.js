import React, { useState, useEffect } from "react";

import TransactionList from "../TransactionList";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import FilterButtonGroup from "../FilterButtonGroup";
import WideButton from "../WideButton";
import TransactionForm from "../TransactionForm";
import {
  getTransactions,
  deleteTransactions,
  addTransactions,
  updateTransactions
} from "../lib/getTransactions";
import Modal from "../Modal";
import AddIcon from "../../icons/add.svg";

const TransactionPage = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [modalOpened, setModalOpened] = useState(false);
  const [transactionForm, setTransactionForm] = useState(null);

  useEffect(() => {
    getTransactions().then(setTransactionList);
  }, []);

  const addTransaction = transaction => {
    const newId = transactionList.length
      ? transactionList[transactionList.length - 1].id + 1
      : 1;
    transaction.id = newId;
    addTransactions(transaction).then(setTransactionList);
    setModalOpened(false);
  };

  const updateTransaction = editedTransaction => {
    updateTransactions(editedTransaction).then(setTransactionList);
    setModalOpened(false);
  };

  const deleteTransaction = id => {
    deleteTransactions(id).then(setTransactionList);
  };

  const getFilteredTransactions = () => {
    if (filter !== "all") {
      return transactionList.filter(transaction => transaction.type === filter);
    } else {
      return transactionList;
    }
  };

  const handleEditButton = transaction => {
    setTransactionForm(transaction);
    setModalOpened(true);
  };

  const handleAddButton = () => {
    setTransactionForm(null);
    setModalOpened(true);
  };

  return (
    <>
      <Header>
        <FilterButtonGroup
          setTransactionFilter={setFilter}
          selected={filter}
          filterTypes={["in", "out", "all"]}
        />
      </Header>
      <Content id={"screen"}>
        <TransactionList
          transactions={getFilteredTransactions()}
          onDelete={deleteTransaction}
          onEdit={handleEditButton}
        />
      </Content>
      <Footer>
        <WideButton
          onClick={handleAddButton}
          label={"add transaction"}
          icon={AddIcon}
        />
      </Footer>
      <Modal
        isOpen={modalOpened}
        onRequestClose={() => setModalOpened(false)}
        appElement={document.getElementById("screen")}
        component={
          <TransactionForm
            confirm={transactionForm ? updateTransaction : addTransaction}
            transaction={transactionForm}
          />
        }
      />
    </>
  );
};

export default TransactionPage;
