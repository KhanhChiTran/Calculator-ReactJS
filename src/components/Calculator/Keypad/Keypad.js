import React from "react";
import Button from "../../Button/Button";
import { KeypadStyle } from "../../Stylings";

export default function Keypad() {
  return (
    <div>
      <KeypadStyle>
        <Button>(</Button>
        <Button>)</Button>
        <Button>C</Button>
        <Button>{"<="}</Button>
        <Button>+</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>000</Button>
        <Button>-</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>00</Button>
        <Button>/</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>0</Button>
        <Button>*</Button>
        <Button>===</Button>
        <Button>!==</Button>
        <Button>{">"}</Button>
        <Button>{"<"}</Button>
        <Button>.</Button>
        <Button>=</Button>
      </KeypadStyle>
    </div>
  );
}
