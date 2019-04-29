import React, { useState } from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

const ModalBody = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ModalRestyle = {
  overlay: {
    backgroundColor: "black",
    zIndex: "10000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    backgroundColor: "rgb(0, 169, 255)",
    border: "var(--primary-border)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "35%",
    height: "40%",
    marginLeft: "30%",
    marginTop: "10%"
  }
};

const StyledButton = styled.button`
  width: 8rem;
  height: 2rem;
  font-family: inherit;
  color: inherit;
  letter-spacing: inherit;
  background-color: rgb(70, 255, 155);
  border-radius: 2rem;
  border: var(--primary-border);
  box-shadow: var(--primary-shadow);
`;

const Modal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  appElement,
  addTransaction
}) => {
  const [name, setName] = useState("Transaction name");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("in");

  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  const currentDate = `${yyyy}-${mm}-${dd}`;
  const [created, setCreated] = useState(currentDate);

  const getParent = () => document.querySelector("#wallet");

  const createTransactionObject = () => {
    const newValue = parseFloat(value);
    const dateArray = created.split("-");
    const parsedDate = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`;
    const newObject = {
      name: name,
      value: type === "in" ? newValue : -newValue,
      type: type,
      created: parsedDate,
      currency: "CZK"
    };
    return newObject;
  };

  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      parentSelector={getParent}
      appElement={appElement}
      style={ModalRestyle}
    >
      <ModalBody>
        <h3>Transaction details:</h3>
        <div>
          Name:{" "}
          <input
            onChange={event => setName(event.target.value)}
            value={name}
            type="text"
          />
        </div>
        <div>
          Value:{" "}
          <input
            onChange={event => setValue(event.target.value)}
            value={value}
            type="number"
          />
        </div>
        <div>
          Type:{" "}
          <input
            type="radio"
            name="type"
            value={"in"}
            checked={type === "in"}
            onChange={() => setType("in")}
          />{" "}
          In{" "}
          <input
            type="radio"
            name="type"
            value={"out"}
            checked={type === "out"}
            onChange={() => setType("out")}
          />{" "}
          Out
        </div>
        <div>
          Created:{" "}
          <input
            onChange={event => setCreated(event.target.value)}
            value={created}
            type="date"
          />
        </div>
        <br />
        <StyledButton onClick={() => addTransaction(createTransactionObject())}>
          Add transaction
        </StyledButton>
      </ModalBody>
    </ReactModal>
  );
};

export default Modal;
