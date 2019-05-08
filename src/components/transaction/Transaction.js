import React, { useState } from "react";
import styled from "styled-components";
import TransactionButton from "./TransactionButton";
import deleteIcon from "../../icons/delete.svg";
import editIcon from "../../icons/edit.svg";
import arrowUp from "../../icons/arrow_upward.svg";
import arrowDown from "../../icons/arrow_downward.svg";
import { transactionBoxMargin } from "../../constants";

import { globalShadow, globalLight } from "../../constants";

const TransactionBox = styled.div`
  background-color: ${globalLight};
  width: 100%;
  box-shadow: ${globalShadow};
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-shrink: 0;
  transition: all 2s linear;
  margin-top: ${transactionBoxMargin};
  margin-bottom: ${transactionBoxMargin};
  cursor: ${({ clickable }) => (clickable ? "pointer" : "default")};

  :not(:last-child) {
    margin-bottom: 0;
  }
`;

const TransactionInfo = styled.div`
  height: 3rem;
  margin-right: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-grow: 1;
`;

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

const Transaction = ({ data, onDelete, onEdit, clickable }) => {
  const [open, setOpen] = useState(false);

  return (
    <TransactionBox clickable={clickable}>
      <TransactionRow>
        <Icon src={data.type === "in" ? arrowUp : arrowDown} />
        <TransactionInfo onClick={() => setOpen(!open)}>
          <Name>{data.name}</Name>
          <Price>
            {data.type === "in" ? "+" : "-"} {data.value} {data.currency}
          </Price>
        </TransactionInfo>
        {onEdit && (
          <TransactionButton
            level={"warning"}
            onClick={() => onEdit(data)}
            label={"edit"}
            icon={editIcon}
          />
        )}
        {onDelete && (
          <TransactionButton
            level={"danger"}
            onClick={() => onDelete(data.id)}
            label={"delete"}
            icon={deleteIcon}
          />
        )}
      </TransactionRow>
      {clickable && (
        <DetailedContainer open={open} onClick={() => setOpen(!open)}>
          <div>{data.created}</div>
        </DetailedContainer>
      )}
    </TransactionBox>
  );
};

export default Transaction;
