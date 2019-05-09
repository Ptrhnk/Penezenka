import styled from "styled-components";
import { withWindowSize } from "react-fns";
import { globalBlue } from "../../constants";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  flex-grow: 1;
  height: ${({ height }) => height}px;
  background-color: ${globalBlue};
  border-radius: 0.8rem;
  max-width: 42%;

  @media (max-width: 1200px) {
    min-width: 60%;
  }
  @media (max-width: 900px) {
    min-width: 100%;
    background: palevioletred;
  }
`;

export default withWindowSize(PageContainer);
