import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Open Sans Condensed';
  padding: 20px 60px;
  @media screen and (max-width: 800px) {
    padding: 10px;
  }
}

a {
  text-decoration: none;
  color: #000;
}

* {
  box-sizing: border-box;
}

.contact button, .form-group {
  margin-top: 1rem;
}
`;
