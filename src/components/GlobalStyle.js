import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;  
    transition: all 300ms;
    color: #dcd9d8;
  }

  html {
    scroll-behavior: smooth;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`