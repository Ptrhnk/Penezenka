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
  addTransactions
} from "../lib/getTransactions";
import Modal from "../Modal";
import AddIcon from "../../icons/add.svg";

const initTransaction = {
  name: "Název transakce",
  value: 0,
  type: "in",
  created: "12.3.2018",
  currency: "CZK"
};

const TransactionPage = () => {
  const [transactionList, setTransactionList] = useState([]);
  const [filter, setFilter] = useState("all");
  const [modalOpened, setModalOpened] = useState(false);
  const [transactionForm, setTransactionForm] = useState(initTransaction);

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
    console.log(editedTransaction);
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

  const handleEditButton = object => {
    setTransactionForm(object);
    setModalOpened(true);
  };

  const handleAddButton = () => {
    setTransactionForm(initTransaction);
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
            confirm={addTransaction}
            transaction={transactionForm}
          />
        }
      />
    </>
  );
};

export default TransactionPage;
