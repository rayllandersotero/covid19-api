import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
  }

  body, button, input {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    color: #555;
  }

  body {
    background: #eee;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    max-width: 75rem;
    padding: 2rem;
    margin: 0 auto;
  }
`;

export default globalStyle;
