import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 10px 0;
  }

  button {
    margin-left: 10px;
  }
`;

export default GlobalStyle;
