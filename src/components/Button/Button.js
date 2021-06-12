import React, { useContext } from "react";
import { ValueContext } from "../../Context/valueContext";
import { ButtonStyle } from "../Stylings";

export default function Button({ children, title, ...rest }) {
  const { handleNumber } = useContext(ValueContext);
  return (
    // <div {...rest}>
    <ButtonStyle {...rest}>{title || children}</ButtonStyle>
    // </div>
  );
}
