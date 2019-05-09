import React from "react";
import styled from "styled-components";

import arrowUp from "../icons/arrow_upward.svg";
import arrowDown from "../icons/arrow_downward.svg";

import { globalShadow, globalLight } from "../constants";

const Box = styled.div`
  background-color: ${globalLight};
  margin: 1rem 0.7rem 0 0.7rem;
  padding: 0.7rem 1.4rem 0.7rem 1rem;
  border-radius: 4rem;
  box-shadow: ${globalShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

const Icon = styled.img`
  height: 1.8rem;
  width: 1.8rem;
`;

const MarginLeft = styled.div`
  margin-left: 0.5rem;
`;

const SummaryBox = ({ level, label, summary }) => {
  return (
    <Box>
      {(level === "in" || level === "all") && (
        <Icon src={arrowUp} alt={label} />
      )}
      {(level === "out" || level === "all") && (
        <Icon src={arrowDown} alt={label} />
      )}
      <MarginLeft>
        {summary > 0 ? "+" : ""}
        {summary} CZK
      </MarginLeft>
    </Box>
  );
};

export default SummaryBox;
