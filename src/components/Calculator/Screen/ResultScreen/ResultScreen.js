import React, { useContext } from "react";
import { ValueContext } from "../../../../Context/valueContext";

export default function ResultScreen() {
  const { result } = useContext(ValueContext);
  return <div>{result}</div>;
}
