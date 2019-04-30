import React from "react";
import IntervalButton from "./IntervalButton";

const IntervalButtonGroup = ({ selected, setInterval, intervalTypes }) =>
  intervalTypes.map((intervalType, key) => (
    <IntervalButton
      key={key}
      label={intervalType}
      onClick={() => setInterval(intervalType)}
      selected={selected === intervalType}
    />
  ));

export default IntervalButtonGroup;
