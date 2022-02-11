import { createGlobalStyle } from "styled-components";
import { NavBar } from "./Components/NavBar";

const GlobalStyle = createGlobalStyle`
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
  h1, h2, h3 {
    font-family: 'Pacifico', cursive;
    font-size: 24px;
    color: #FFFFFF;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle/>
    <NavBar/>
    </>
  );
}

export default App;
