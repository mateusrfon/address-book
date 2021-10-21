import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
	  	box-sizing: border-box;
    	margin: 0;
    	padding: 0;
		border: 0;
		font-family: 'Roboto', sans-serif;
		font-size: 100%;
		vertical-align: baseline;
  }
  body {
	  background-color: #E1E2E1;
  }
`;

export default GlobalStyle;
