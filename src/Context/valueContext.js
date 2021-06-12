import React, { useState } from "react";

export const ValueContext = React.createContext();
export const NumberProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(0);
  const [tempResult, setTempResult] = useState(0);
  const [tempOperator, setTempOperator] = useState(null);

  const handleOperator = (e) => {
    if (!value) return;
    setValue(value + e.target.innerText);
    setTempOperator(e.target.innerText);

    if (
      !value.includes("+") &&
      !value.includes("-") &&
      !value.includes("*") &&
      !value.includes("/")
    ) {
      return;
    }

    // Get current Result

    const currentNumber = value.split(tempOperator).slice(-1)[0];

    switch (tempOperator) {
      case "+":
        setTempResult(Number(tempResult) + Number(currentNumber));
        setResult(Number(tempResult) + Number(currentNumber));
        break;
      case "-":
        setTempResult(Number(tempResult) - Number(currentNumber));
        setResult(Number(tempResult) - Number(currentNumber));
        break;
      case "*":
        setTempResult(Number(tempResult) * Number(currentNumber));
        setResult(Number(tempResult) * Number(currentNumber));

        break;
      case "/":
        setTempResult(Number(tempResult) / Number(currentNumber));
        setResult(Number(tempResult) / Number(currentNumber));

        break;
    }
  };

  const handleNumber = (e) => {
    const number = e.target.innerText;
    if (
      !value.includes("+") &&
      !value.includes("-") &&
      !value.includes("*") &&
      !value.includes("/")
    ) {
      setResult(value + number);
      setTempResult(value + number);
    }
    setValue(value + number);
  };

  const handleClear = () => {
    setValue("");
    setResult(0);
  };
  const handleParentheses = (e) => {
    setValue(value + e.target.innerText);
    console.log(value);
  };
  const handleEqual = (e) => {
    if (
      value.includes("+") ||
      value.includes("-") ||
      value.includes("*") ||
      value.includes("/")
    ) {
      handleOperator(e);
    }
    if (
      value.includes("===") ||
      value.includes("!==") ||
      value.includes("<") ||
      value.includes(">")
    ) {
      handleCompare(e);
    }
    setValue("");
  };
  const handleCompare = (e) => {
    if (!value) return;
    setValue(value + e.target.innerText);
    setTempOperator(e.target.innerText);

    if (
      !value.includes("===") &&
      !value.includes("!==") &&
      !value.includes(">") &&
      !value.includes("<")
    ) {
      return;
    }

    const firstNumber = Number(value.split(tempOperator)[0]);
    const secondNumber = Number(value.split(tempOperator)[1]);

    switch (tempOperator) {
      case "===":
        firstNumber === secondNumber ? setResult("True") : setResult("False");
        break;
      case "!==":
        firstNumber !== secondNumber ? setResult("True") : setResult("False");
        break;
      case "<":
        firstNumber < secondNumber ? setResult("True") : setResult("False");
        break;
      case ">":
        firstNumber > secondNumber ? setResult("True") : setResult("False");
        break;
      case "<=":
        firstNumber <= secondNumber ? setResult("True") : setResult("False");
        break;
    }
  };
  return (
    <ValueContext.Provider
      value={{
        value,
        result,
        handleNumber,
        handleOperator,
        handleClear,
        handleEqual,
        handleCompare,
        handleParentheses
      }}
    >
      {children}
    </ValueContext.Provider>
  );
};
