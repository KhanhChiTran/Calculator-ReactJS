import React from "react";
import {
  ComputationScreenStyle,
  ResultScreenStyle,
  ScreenStyle
} from "../../Stylings";
import ComputationScreen from "./ComputationScreen/ComputationScreen";
import ResultScreen from "./ResultScreen/ResultScreen";

export default function Screen() {
  return (
    <div>
      <ScreenStyle>
        <ResultScreenStyle>
          <ResultScreen />
        </ResultScreenStyle>
        <ComputationScreenStyle>
          <ComputationScreen />
        </ComputationScreenStyle>
      </ScreenStyle>
    </div>
  );
}
