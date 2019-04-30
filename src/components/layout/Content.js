import styled from "styled-components";
import {
  transactionBoxMargin,
  headerHeight,
  footerHeight
} from "../../constants";

const Content = styled.div`
  position: absolute;
  top: ${headerHeight};
  bottom: ${footerHeight};
  left: 0;
  width: 100%;
  overflow-y: scroll;
  padding: ${transactionBoxMargin} ${transactionBoxMargin} 0
    ${transactionBoxMargin};
  display: flex;
  flex-direction: column;
`;

export default Content;
