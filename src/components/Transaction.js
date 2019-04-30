import React, { useState } from "react";
import styled from "styled-components";
import TransactionButton from "./TransactionButton";
// Icons
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
  margin-bottom: ${transactionBoxMargin};
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  transition: all 2s linear;
`;

const TransactionInfo = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;
  margin-right: 1.5rem;
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

const Transaction = ({ id, name, data, onDelete }) => {
  const [open, setOpen] = useState(false);

  return (
    <TransactionBox>
      <TransactionRow>
        {/* <Id onClick={() => setOpen(!open)}>{id}</Id> */}
        <Icon src={data.type === "in" ? arrowUp : arrowDown} />
        <TransactionInfo onClick={() => setOpen(!open)}>
          <Name>{data.name}</Name>
          <Price>
            {data.value} {data.currency}
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
