import React, { useState } from "react";
import styled from "styled-components";
import TransactionButton from "./TransactionButton";
import deleteIcon from "./../icons/delete.svg";
import editIcon from "./../icons/edit.svg";
import arrowUp from "../icons/arrow_upward.svg";
import arrowDown from "../icons/arrow_downward.svg";
import { transactionBoxMargin } from "../constants";

import { primaryShadow } from "../constants";

const TransactionBox = styled.div`
  background-color: rgb(216, 238, 255);
  width: 100%;
  box-shadow: ${primaryShadow};
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  transition: all 2s linear;

  :not(:last-child) {
    margin-bottom: ${transactionBoxMargin};
  }
`;

const TransactionInfo = styled.div`
  height: 3rem;
  margin-right: 1.5rem;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

// const Id = styled.div`
//   height: 3rem;
//   width: 3rem;
//   display: flex;
//   flex-shrink: 0;
//   justify-content: center;
//   align-items: center;
// `;

const Name = styled.div`
  display: flex;
  justify-self: flex-start;
  align-self: center;
`;

const Price = styled.div`
  display: flex;
  justify-self: flex-end;
  align-self: center;
`;

const TransactionRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DetailedContainer = styled.div`
  height: ${({ open }) => (open ? "2.3rem" : "0")};
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  padding-left: 2.8rem;
  padding-right: 7.5rem;
  text-transform: lowercase;
  transition: height 300ms ease-in-out;
`;

const Icon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
  flex-shrink: 0;
  margin-left: 0.8rem;
  margin-right: 0.5rem;
`;

const Transaction = ({ data, onDelete, onEdit }) => {
  const [open, setOpen] = useState(false);

  return (
    <TransactionBox>
      <TransactionRow>
        {/* <Id onClick={() => setOpen(!open)}>{data.id}</Id> */}
        <Icon src={data.type === "in" ? arrowUp : arrowDown} />
        <TransactionInfo onClick={() => setOpen(!open)}>
          <Name>{data.name}</Name>
          <Price>
            {data.type === "in" ? "+" : "-"} {data.value} {data.currency}
          </Price>
        </TransactionInfo>
        <TransactionButton
          level={"warning"}
          onClick={() => onEdit(data)}
          label={"edit"}
          icon={editIcon}
        />
        <TransactionButton
          level={"danger"}
          onClick={() => onDelete(data.id)}
          label={"delete"}
          icon={deleteIcon}
        />
      </TransactionRow>
      <DetailedContainer open={open} onClick={() => setOpen(!open)}>
        <div>{data.created}</div>
        <div>( {data.type} )</div>
      </DetailedContainer>
    </TransactionBox>
  );
};

export default Transaction;
