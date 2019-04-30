import React from "react";
import ReactModal from "react-modal";
import { primaryBorder } from "../constants";

const customStyle = {
  overlay: {
    // backgroundColor: "rgba(255, 255, 255, 0.7)",
    backgroundColor: "black",
    zIndex: "10000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    backgroundColor: "rgb(0, 169, 255)",
    opacity: "1",
    border: primaryBorder,
    borderRadius: ".8rem",
    width: "20rem",
    height: "20rem",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  }
};

const Modal = ({
  isOpen,
  onAfterOpen,
  onRequestClose,
  appElement,
  component
}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      appElement={appElement}
      style={customStyle}
    >
      {component}
    </ReactModal>
  );
};

export default Modal;
