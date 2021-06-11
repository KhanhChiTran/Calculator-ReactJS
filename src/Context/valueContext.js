import React, { useState, useContext, createContext } from "react";

export const ValueContext = React.createContext();
export const NumberProvider = ({ children }) => {
  const [value, setValue] = useState(0);
  const [result, setResult] = useState(0);
  const [operator, setOperator] = useState("");

  const handleOnClick = (e) => {
    const number = e.target.innerText;
    setValue(`${(value + number).replace(/^0+/, "")}`);
    // if (value.includes("a") {
    //     setOperator(number);
    //   }
    // if (number === "=") {

    //   setResult(Number(value));
    // }
  };

  return (
    <ValueContext.Provider value={{ value, result, handleOnClick }}>
      {children}
    </ValueContext.Provider>
  );
};
