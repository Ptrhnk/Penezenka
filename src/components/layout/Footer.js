import styled from "styled-components";
import { primaryBorder, footerHeight } from "../../constants";

const Footer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${footerHeight};
  box-shadow: 0px -3px 5px rgba(0, 0, -5, 0.5);
  z-index: 1000;
  border-top: ${primaryBorder};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
