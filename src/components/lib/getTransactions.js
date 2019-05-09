import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3003/transactions",
  timeout: 1000
});

const getTransactions = () =>
  api
    .get("/")
    .then(({ data }) => data)
    .catch(error => console.log(error));

const deleteTransactions = id =>
  api
    .delete(`/${id}`)
    .then(() => getTransactions())
    .catch(error => console.log(error));

const addTransactions = transaction =>
  api
    .post("/", transaction)
    .then(() => getTransactions())
    .catch(error => console.log(error));

const updateTransactions = transaction =>
  api
    .put(`/${transaction.id}`, transaction)
    .then(() => getTransactions())
    .catch(error => console.log(error));

export {
  getTransactions,
  deleteTransactions,
  addTransactions,
  updateTransactions
};
