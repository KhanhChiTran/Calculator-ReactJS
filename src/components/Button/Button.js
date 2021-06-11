import React, { useContext } from "react";
import { ValueContext } from "../../Context/valueContext";
import { ButtonStyle } from "../Stylings";
export default function Button({ children }) {
  const { handleOnClick } = useContext(ValueContext);
  return (
    <div onClick={handleOnClick}>
      <ButtonStyle>{children}</ButtonStyle>
    </div>
  );
}
