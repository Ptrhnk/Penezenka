import React from "react";
import ReactModal from "react-modal";

import { globalBorder } from "../constants";

const customStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    zIndex: "10000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    backgroundColor: "rgb(0, 169, 255)",
    opacity: "1",
    border: globalBorder,
    borderRadius: ".8rem",
    width: "90%",
    height: "90%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
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
      closeTimeoutMS={200}
    >
      {component}
    </ReactModal>
  );
};

export default Modal;
