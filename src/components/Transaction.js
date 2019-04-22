import React, { useState } from "react";
import styled from "styled-components";
import TransactionButton from "./TransactionButton";
// Icons
import deleteIcon from "./../icons/delete.svg";
import editIcon from "./../icons/edit.svg";

const TransactionBox = styled.div`
  background-color: rgb(216, 238, 255);
  width: 100%;
  box-shadow: var(--primary-shadow);
  margin-bottom: var(--transaction-box-margin);
  border-radius: 0.4rem;
  /* border-bottom: 1px solid black; */
  /* border: 2px solid black; */

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;

  transition: all 2s linear;

  /* :hover {
    background-color: pink;
    color: black;
  } */
`;

const TransactionInfo = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;
  margin-right: 1.5rem;
  /* background-color: purple; */
`;

const Id = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
`;

const Name = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
`;

const Price = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
`;

const TransactionRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DetailedContainer = styled.div`
  height: ${({ open }) => (open ? "2.3rem" : "0")};
  /* border-top: ${({ open }) => (open ? "1px dashed black" : "none")}; */
  width: 100%;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  padding-left: 3rem;
  padding-right: 7rem;
  text-transform: lowercase;
  transition: height 300ms ease-in-out;
`;

const Transaction = ({
  id,
  name,
  value,
  type,
  created,
  currency,
  onDelete
}) => {
  // change to false
  const [open, setOpen] = useState(false);

  return (
    <TransactionBox>
      <TransactionRow>
        <Id onClick={() => setOpen(!open)}>{id}</Id>
        <TransactionInfo onClick={() => setOpen(!open)}>
          <Name>{name}</Name>
          {/* <Created>{created}</Created> */}
          <Price>
            {value} {currency}
          </Price>
        </TransactionInfo>
        <TransactionButton
          level={"warning"}
          onClick={() => console.log("edit")}
          label={"edit"}
          icon={editIcon}
        />
        <TransactionButton
          level={"danger"}
          onClick={onDelete}
          label={"delete"}
          icon={deleteIcon}
        />
      </TransactionRow>
      <DetailedContainer open={open} onClick={() => setOpen(!open)}>
        <div>{created}</div>
        <div>( {type} )</div>
      </DetailedContainer>
    </TransactionBox>
  );
};

export default Transaction;
