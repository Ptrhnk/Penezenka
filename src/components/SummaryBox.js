import React from "react";
import styled from "styled-components";
// Icons
import arrowUp from "../icons/arrow_upward.svg";
import arrowDown from "../icons/arrow_downward.svg";

import { PRIMARY_SHADOW, PRIMARY_BORDER } from "../constants";

const Box = styled.div`
  height: 6rem;
  width: 80%;
  background-color: #fff;
  margin: 1rem 1rem;
  border: ${({ PRIMARY_BORDER }) => PRIMARY_BORDER};
  border-radius: 1rem;
  box-shadow: ${({ PRIMARY_SHADOW }) => PRIMARY_SHADOW};

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
    <Box PRIMARY_SHADOW={PRIMARY_SHADOW} PRIMARY_BORDER={PRIMARY_BORDER}>
      {(level === "in" || level === "all") && (
        <Icon src={arrowUp} alt={label} />
      )}
      {(level === "out" || level === "all") && (
        <Icon src={arrowDown} alt={label} />
      )}
      <MarginLeft>{summary} CZK</MarginLeft>
    </Box>
  );
};

export default SummaryBox;
