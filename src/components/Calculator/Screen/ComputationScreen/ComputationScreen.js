import React, { useContext, useState } from "react";
import { ValueContext } from "../../../../Context/valueContext";

export default function ComputationScreen() {
  const { value } = useContext(ValueContext);
  return <div>{value}</div>;
}
