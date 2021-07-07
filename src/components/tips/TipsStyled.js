import styled, { keyframes, css } from "styled-components/macro"

export const slideIn = keyframes`
  0% {
    transform: translateX(1000px);
  }
  100% {
    transform: translateX(0);
  }
`
export const TipsSection = styled.section`
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 82px;
  }
`
export const TipsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 15px;

  @media screen and (min-width: 768px) {
    padding: 0 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 60px;
  }
`
export const TipsSectionTitle = styled.h2`
  margin-bottom: 32px;

  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;
  text-align: center;
  text-transform: capitalize;
  color: #3a3a3a;

  @media screen and (min-width: 576px) {
    font-size: 40px;
  }
`
export const SliderContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const SlideContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  column-gap: 10px;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  //   @media screen and (min-width: 768px) {
  //     column-gap: 20px;
  //   }

  //   @media screen and (min-width: 1440px) {
  //     grid-template-columns: repeat(3, 1fr);
  //     column-gap: 32px;
  //   }
`
export const SlideElement = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);
`
export const SlideElementThumb = styled.div`
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 251px;
  }

  //   @media screen and (min-width: 768px) {
  //     width: 374px;
  //   }

  //   @media screen and (min-width: 1440px) {
  //     width: 390px;
  //   }
`
export const SlideElementContent = styled.div`
  padding: 16px;
`
export const SlideElememtDesc = styled.h3`
  margin-bottom: 8px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;

  color: #3a3a3a;
`
export const SlideElememtDate = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;

  color: #898989;
`
const SlideBtnStyles = css`
  position: absolute;
  top: 50%;
  width: 48px;
  height: 48px;
  border: none;
  outline: none;
  border-radius: 50%;
  font-size: 2rem;
  color: #e89f71;
  background-color: #ffffff;
  z-index: 10;
  cursor: pointer;
  user-select: none;
`
export const NextSlideBtn = styled.button`
  ${SlideBtnStyles}
  right: 0;
  transform: translate(50%, -50%);
`
export const PrevSlideBtn = styled.button`
  ${SlideBtnStyles}
  left: 0;
  transform: translate(-50%, -50%);
`
export const DotsContainer = styled.div`
  @media screen and (max-width: 575px) {
    display: none;
  }

  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  bottom: 10px;
`
export const Dot = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  border: 3px solid #e89f71;
  border-radius: 50%;
  background: #e89f71;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &.active {
    background: #ffffff;
  }
`
