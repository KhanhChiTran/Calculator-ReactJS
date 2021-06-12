import styled from "styled-components";

const theme = {
  shadow: " rgba(0, 0, 0, 0.4)",
  colorPink: "pink",
  colorWhite: "white",
  colorBlack: "black",
  borderRadius: "5px",
  colorBlue: "aqua",
  colorWhiteLight: "#ccc",
  textColor: "palevioletred"
};

export const CalculatorStyle = styled.div`
  margin: 5vh auto;
  padding: 50px;
  height: auto;

  max-width: 500px;
  width: 500px;
  box-shadow: 0 2rem 4rem ${theme.shadow}, 7px -8px 0px 7px ${theme.colorPink};
  background-color: ${theme.colorPink};
  border-radius: ${theme.borderRadius};
`;

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: right;
  margin-right: 20px;
  color: ${theme.textColor};
`;

export const ScreenStyle = styled.div`
  border-radius: ${theme.borderRadius};
  width: 100%;
  height: 10vh;
  text-align: right;
  padding: 15px 0;
  background-color: ${theme.colorBlack};
  box-shadow: inset -5px 5px 6px 0px #cccccc9c;
`;

export const ComputationScreenStyle = styled.div`
  font-size: 1.5rem;
  color: ${theme.colorWhiteLight};
  margin-right: 10px;
`;
export const ResultScreenStyle = styled.div`
  font-size: 3.5rem;
  color: ${theme.colorWhite};
  margin-right: 10px;
`;

export const KeypadStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  grid-gap: 5px;

  width: 100%;
  margin: 30px 0;
  /* background: ${theme.colorBlack}; */
`;

export const ButtonStyle = styled.button`
  width: 100%;
  height: 70px;
  font-size: 2rem;
  border-radius: ${theme.borderRadius};
  color: ${theme.textColor};
  box-shadow: 0 2px 4px ${theme.shadow};
  background-color: ${theme.colorWhite};
  border: 1px solid transparent;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  /* grid-column: 3 / span 2; */
  &:hover {
    color: ${theme.colorBlack};
    background-color: ${theme.colorPink};
  }
  &:active {
    transform: scale(0.95);
  }
`;
