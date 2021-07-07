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
  object-fit: cover
}

.slide {
  transform: transitionX(1000px)
  transition-duration: 1s ease;
}

.slide.active {
  transform: transitionX(0)
  transition-duration: 1s;
}
`
export default GlobalStyles
