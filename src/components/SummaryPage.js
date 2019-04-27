import React from "react";
import styled from "styled-components";

import SummaryBox from "../components/SummaryBox";

const SummaryList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const SummaryPage = () => {
  return (
    <div>
      <SummaryList>
        <SummaryBox level={"in"} />
        <SummaryBox level={"out"} />
        <SummaryBox level={"all"} />
      </SummaryList>
    </div>
  );
};

export default SummaryPage;
