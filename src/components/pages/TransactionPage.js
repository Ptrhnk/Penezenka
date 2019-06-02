import React, { useState, useEffect, useRef } from "react";

import TransactionList from "../transaction/TransactionList";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Content from "../layout/Content";
import FilterButtonGroup from "../FilterButtonGroup";
import WideButton from "../WideButton";
import TransactionForm from "../transaction/TransactionForm";
import {
  getTransactions,
  deleteTransactions,
  addTransactions,
  updateTransactions
} from "../lib/getTransactions";
import Modal from "../Modal";
import AddIcon from "../../icons/add.svg";
import useTransactions from "./useTransactions";

const TransactionPage = () => {
  const [transactions, setTransactions] = useTransactions();
  const [filter, setFilter] = useState("all");
  const [modalOpened, setModalOpened] = useState(false);
  const [transactionForm, setTransactionForm] = useState(null);

  useEffect(() => {
    getTransactions().then(setTransactions);
  }, []);

  const content = useRef();

  useEffect(() => {
    content.current.scrollTo(0, 0);
  }, [filter]);

  const addTransaction = transaction => {
    const newId = transactions.length
      ? transactions[transactions.length - 1].id + 1
      : 1;
    transaction.id = newId;
    addTransactions(transaction).then(setTransactions);
    setModalOpened(false);
  };

  const updateTransaction = editedTransaction => {
    updateTransactions(editedTransaction).then(setTransactions);
    setModalOpened(false);
  };

  const deleteTransaction = id => {
    deleteTransactions(id).then(setTransactions);
  };

  const getFilteredTransactions = () => {
    if (filter !== "all") {
      return transactions.filter(transaction => transaction.type === filter);
    } else {
      return transactions;
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
          overviewButton
        />
      </Header>
      <Content ref={content} id={"screen"}>
        <TransactionList
          transactions={getFilteredTransactions()}
          onDelete={deleteTransaction}
          onEdit={handleEditButton}
          clickable
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
            close={() => setModalOpened(false)}
            transaction={transactionForm}
          />
        }
      />
    </>
  );
};

export default TransactionPage;
