import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body { 
    background-color: #c6e3fd;
    font-family: 'Roboto', sans-serif;
  }
  
  a {
  color: inherit;
  text-decoration: none;
  }
  li {
  list-style: none;
  }
  button{
    background: none;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
  input { 
    outline: 0;
    border: 0;
  }
`;

export default GlobalStyle;
