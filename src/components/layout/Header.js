import styled from "styled-components";
import { globalBorder, headerHeight } from "../../constants";

const Header = styled.div`
  width: 100%;
  height: ${headerHeight};
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.5);
  z-index: 1000;
  border-bottom: ${globalBorder};
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-shrink: 0;
`;

export default Header;
