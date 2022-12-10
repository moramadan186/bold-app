import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: background 0.3s ease 0s;
  font-weight: 400;
}

html,
body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: Inter, sans-serif;
  font-size: 14px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
}

input,
button,
textarea,
select {
  font: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6,
button {
  overflow-wrap: break-word;
  font-family: "Magnita", serif;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  background: none;
  border: none;
  cursor: pointer;
}

p {
  font-weight: 500;
}

ul{
  list-style-type: none;
}

.container {
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  transition: max-width 0.2s ease-in-out;

}

@media (min-width: 1290px) {
  .container {
    max-width: 1290px;
  }
}

.main {
  padding-top: 8rem;
}

@media only screen and (max-width: 65em) {
  .main {
    padding-top: 5.5rem;
  }
}
`;