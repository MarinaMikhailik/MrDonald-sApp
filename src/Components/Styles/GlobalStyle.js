import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inheret;
  }
  body {
	  margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    color: black;
    background: #FFFFFF;
  } 
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  h1, h3 {
    font-family: 'Pacifico', cursive;
    font-size: 24px;
    color: #FFFFFF;
  }
  h2 {
    font-family: 'Pacifico', cursive;
    font-size: 24px;
    margin: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  button {
      cursor: pointer;
  }
  input, button {
    font: inherit;
  }
  input[type='number']{
    -moz-appearance: textfield;
  }
  input[type='number']{
    -webkit-appearance: textfield;
  }
  input::-webkit-outer-spin-button, 
  input::-webkit-inner-spin-button{
    -webkit-appearance: none;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;