import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Poppins", sans-serif;
}

img {
  display: block;
  width: 100%;
  height: 100%;
}
`
export default GlobalStyles
