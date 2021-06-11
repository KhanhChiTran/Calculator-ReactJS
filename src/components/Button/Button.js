import React from "react";
import { ButtonStyle } from "../Stylings";
export default function Button({ children }) {
  return (
    <div>
      <ButtonStyle>{children}</ButtonStyle>
    </div>
  );
}
