import styled from "styled-components"

import heroBg from "../../assests/images/hero-bg.jpg"

export const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
`
export const HeroWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  overflow: hidden;

  background-image: url(${heroBg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
    align-items: flex-start;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 60px;
  }
`
export const HeroForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 40px;

  background-color: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(31px);

  h1 {
    margin-bottom: 16px;

    font-weight: 700;
    font-size: 56;
    line-height: 1.2;

    color: #3a3a3a;
    text-transform: capitalize;
  }

  p {
    margin-bottom: 48px;

    font-weight: 500;
    font-size: 20;
    line-height: 1.5;

    color: #898989;
  }

  button {
    height: 78px;
    width: 100%;
    border: none;
    outline: none;

    font-weight: 600;
    font-size: 20;
    line-height: 1.5;
    white-space: nowrap;

    color: #ffffff;
    text-transform: capitalize;
    background-color: #e89f71;
  }

  @media screen and (min-width: 576px) {
    width: 450px;
    padding: 60px;
  }

  @media screen and (min-width: 768px) {
    width: 494px;
  }
`
