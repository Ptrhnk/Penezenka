import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

import FilterButtonGroup from "./components/FilterButtonGroup";

const TopButtonGroup = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: var(--filter-panel-height);
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  border-bottom: ${({ PRIMARY_BORDER }) => PRIMARY_BORDER};
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Header = ({ location }) => {
  return (
    <>
      {location === "/" && (
        <TopButtonGroup>
          <FilterButtonGroup />
        </TopButtonGroup>
      )}
    </>
  );
};

export default withRouter(Header);
