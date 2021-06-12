import React, { useContext } from "react";
import Button from "../../Button/Button";
import { ValueContext } from "../../../Context/valueContext";
import { KeypadStyle } from "../../Stylings";
import styled from "styled-components";

export const EquaLButton = styled(Button)`
  grid-column: span 5;
`;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operators = ["+", "-", "*", "/"];

export default function Keypad() {
  const {
    handleNumber,
    handleOperator,
    handleClear,
    handleEqual,
    handleCompare,
    handleParentheses
  } = useContext(ValueContext);
  return (
    <div>
      <KeypadStyle>
        <Button onClick={handleParentheses} title="(" />
        {/* (</Button> */}
        <Button onClick={handleParentheses}>{")"}</Button>
        <Button onClick={handleClear}>C</Button>
        <Button onClick={handleCompare}>{"<="}</Button>
        <Button onClick={handleOperator}>+</Button>
        <Button onClick={handleNumber}>1</Button>
        <Button onClick={handleNumber}>2</Button>
        <Button onClick={handleNumber}>3</Button>
        <Button onClick={handleNumber}>000</Button>
        <Button onClick={handleOperator}>-</Button>
        <Button onClick={handleNumber}>4</Button>
        <Button onClick={handleNumber}>5</Button>
        <Button onClick={handleNumber}>6</Button>
        <Button onClick={handleNumber}>00</Button>
        <Button onClick={handleOperator}>/</Button>
        <Button onClick={handleNumber}>7</Button>
        <Button onClick={handleNumber}>8</Button>
        <Button onClick={handleNumber}>9</Button>
        <Button onClick={handleNumber}>0</Button>

        {/* {numbers.map((item, i) => (
          <Button title={item} onClick={handleOperator} />
        ))} */}
        <Button onClick={handleOperator}>*</Button>
        <Button onClick={handleCompare}>===</Button>
        <Button onClick={handleCompare}>!==</Button>
        <Button onClick={handleCompare}>{">"}</Button>
        <Button onClick={handleCompare}>{"<"}</Button>
        <Button onClick={handleNumber}>.</Button>
        <EquaLButton onClick={handleEqual}>=</EquaLButton>
      </KeypadStyle>
    </div>
  );
}
