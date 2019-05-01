import styled from "styled-components";
import { primaryBorder, footerHeight } from "../../constants";

const Footer = styled.div`
  width: 100%;
  height: ${footerHeight};
  box-shadow: 0px -3px 5px rgba(0, 0, -5, 0.5);
  z-index: 1000;
  border-top: ${primaryBorder};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export default Footer;
