import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #1C1B1E;
    color: White;

    -webkit-font-smoothing: antialiased;

  }

  body, input, button, textarea {
    font-family: 'Roboto', serif;
  }

  input, button, textarea:focus {
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }



`;
