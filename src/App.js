import React from "react"

import GlobalStyles from "./styles/globalStyles"
import Navbar from "./components/navbar"
import Hero from "./components/hero"
import Products from "./components/products"

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Products />
    </>
  )
}

export default App
