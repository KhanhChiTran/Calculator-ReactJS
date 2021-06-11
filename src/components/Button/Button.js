import React, { useContext } from "react";
import { ValueContext } from "../../Context/valueContext";
import { ButtonStyle } from "../Stylings";
export default function Button({ children, title }) {
  const { handleOnClick } = useContext(ValueContext);
  return (
    <div onClick={handleOnClick}>
      <ButtonStyle>{title || children}</ButtonStyle>
    </div>
  );
}
