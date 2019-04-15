import React from "react";
import styled from "styled-components";

const Tomato = styled.div`
  background-color: blue;
`;

const Transaction = ({ valueProp, currency }) => (
  <Tomato style={{ margin: "20px" }}>
    <div>{valueProp}</div>
    <div>{currency}</div>
  </Tomato>
);

export default Transaction;
