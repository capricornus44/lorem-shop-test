import React from "react"

import { HeroSection, HeroWrapper, HeroForm } from "./HeroStyled"

const Hero = () => {
  return (
    <HeroSection>
      <HeroWrapper>
        <HeroForm>
          <h1>High-quality furniture just for you</h1>
          <p>Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
          <button type="button">Shop now</button>
        </HeroForm>
      </HeroWrapper>
    </HeroSection>
  )
}

export default Hero
