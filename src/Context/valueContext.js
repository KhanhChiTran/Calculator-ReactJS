import React, { useState, useContext, createContext } from "react";

export const ValueContext = React.createContext();
export const NumberProvider = ({ children }) => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(0);
  const [tempNum, setTempNum] = useState(0);

  const handleOnClick = (e) => {
    const number = e.target.innerText;
    setValue(`${(value + number).replace(/^0+/, "")}`);
    if (number === "=") {
      if (value !== "" || value !== 0) {
        if (value.includes("+")) {
          let x = value.split("+")[0];
          let y = value.split("+")[1];
          if (x && y) {
            setResult(Number(x) + Number(y));
            setTempNum(result);
            setValue(Number(x) + Number(y));
          }
        } else if (value.includes("-")) {
          let x = value.split("-")[0];
          let y = value.split("-")[1];
          if (x && y) {
            setResult(Number(x) - Number(y));
            setTempNum(result);
            setValue(Number(x) - Number(y));
          }
        } else if (value.includes("*")) {
          let x = value.split("*")[0];
          let y = value.split("*")[1];
          if (x && y) {
            setResult(Number(x) * Number(y));
            setTempNum(result);
            setValue(Number(x) * Number(y));
          }
        } else if (value.includes("/")) {
          let x = value.split("/")[0];
          let y = value.split("/")[1];
          if (x && y) {
            setResult(Number(x) / Number(y));
            setTempNum(result);
            setValue(Number(x) / Number(y));
          }
        }
      } else {
        alert("Invalid Calculation");
      }
    }
    if (number === "C") {
      setValue(0);
      setResult(0);
    }
  };

  return (
    <ValueContext.Provider value={{ value, result, handleOnClick }}>
      {children}
    </ValueContext.Provider>
  );
};
