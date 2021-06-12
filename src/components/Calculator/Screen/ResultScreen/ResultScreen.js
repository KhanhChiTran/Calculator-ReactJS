import React, { useContext } from "react";
import { ValueContext } from "../../../../Context/valueContext";

export default function ResultScreen() {
  const { result, value } = useContext(ValueContext);
  // console.log(value);
  return <div>{result}</div>;
}
