import styled from "styled-components";
import { withWindowSize } from "react-fns";
import { globalBlue } from "../../constants";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height}px;
  background-color: ${globalBlue};
  border-radius: 0.8rem;
`;

export default withWindowSize(PageContainer);
