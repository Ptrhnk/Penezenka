import styled from "styled-components";
import { transactionBoxMargin } from "../../constants";

const Content = styled.div`
  left: 0;
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: ${transactionBoxMargin};
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

export default Content;
