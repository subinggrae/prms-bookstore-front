import "sanitize.css";
import { createGlobalStyle } from "styled-components";
import { ThemeName } from "./theme";

interface Props {
  themeName: ThemeName;
}

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${(props: Props) => (props.themeName === "light" ? "white" : "black")};
  }

  h1 {
    margin: 0;
  }

  * {
    color: ${(props: Props) => (props.themeName === "light" ? "black" : "white")};
  }
`;
