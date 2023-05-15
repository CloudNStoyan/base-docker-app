import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100vh;
    height: -webkit-fill-available;
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    display: flex;
  }

  #app {
    flex-grow: 1;
  }
`;
