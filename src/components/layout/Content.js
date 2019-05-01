import styled from "styled-components";
import { transactionBoxMargin } from "../../constants";

const Content = styled.div`
  left: 0;
  width: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  padding: ${transactionBoxMargin} ${transactionBoxMargin} 0
    ${transactionBoxMargin};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default Content;
