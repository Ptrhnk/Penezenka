import React from "react";
import IntervalButton from "./IntervalButton";

const IntervalButtonGroup = ({ selected, setIntervalFilter }) => {
  return (
    <>
      <IntervalButton
        label={"Day"}
        onClick={() => setIntervalFilter("day")}
        selected={selected === "day"}
      />
      <IntervalButton
        label={"Month"}
        onClick={() => setIntervalFilter("month")}
        selected={selected === "month"}
      />
      <IntervalButton
        label={"All"}
        onClick={() => setIntervalFilter("all")}
        selected={selected === "all"}
      />
    </>
  );
};

export default IntervalButtonGroup;
