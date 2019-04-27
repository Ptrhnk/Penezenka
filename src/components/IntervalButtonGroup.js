import React from "react";
import IntervalButton from "./IntervalButton";

const IntervalButtonGroup = () => {
  return (
    <>
      <IntervalButton label={"den"} />
      <IntervalButton label={"měsíc"} />
      <IntervalButton label={"vše"} />
    </>
  );
};

export default IntervalButtonGroup;
