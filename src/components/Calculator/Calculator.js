import React from "react";
import { CalculatorStyle, Title } from "../Stylings";
import Keypad from "./Keypad/Keypad";
import Screen from "./Screen/Screen";

export default function Calculator() {
  return (
    <div className="calculator">
      <CalculatorStyle>
        <Title>iCalc</Title>
        <Screen />
        <Keypad />
      </CalculatorStyle>
    </div>
  );
}
