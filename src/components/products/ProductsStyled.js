import styled, { css } from "styled-components/macro"

export const ProductsSection = styled.section`
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 50px;
  }

  @media screen and (min-width: 1440px) {
    padding-top: 82px;
  }
`
export const ProductsWrapper = styled.div`
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
export const Advantages = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  color: #3a3a3a;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 115px;
  }
`
export const AdvantagesItem = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  grid-template-rows: repeat(2, 20px);
  column-gap: 10px;
  align-items: center;

  @media screen and (min-width: 768px) {
    column-gap: 24px;
  }

  img {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    width: 35px;
    height: 40px;
  }

  h4 {
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
    white-space: nowrap;
    text-transform: capitalize;

    @media screen and (min-width: 480px and max-width: 767px) {
      font-size: 16px;
    }
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    white-space: nowrap;
    color: #898989;

    @media screen and (min-width: 480px and max-width: 767px) {
      font-size: 12px;
    }
  }
`
export const ProductsGallery = styled.div`
  margin-top: 32px;

  @media screen and (min-width: 576px) {
    display: flex;
    flex-direction: column;
    aligh-items: center;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 104px;
  }
`
export const ProductsGalleryTitle = styled.h2`
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
export const ProductsList = styled.ul`
  @media screen and (max-width: 575px) {
    display: block;
  }

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 32px;

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, auto);
  }
`
export const ProductCard = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 16px 30px;

  background-color: #f4f5f7;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.06), 1px 4px 6px rgba(0, 0, 0, 0.16);

  @media screen and (max-width: 479px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: rgba(58, 58, 58, 0.72);
    opacity: 0;
  }

  &:hover::before {
    opacity: 1;
    height: 100%;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), height 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &: hover .overlay {
    opacity: 1;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`
export const ProductCardThumb = styled.div`
  margin-bottom: 16px;
`
export const ProductImage = styled.img`
  object-fit: fill;
`
export const ProductCardContent = styled.div``

export const ProductName = styled.h3`
  margin-bottom: 8px;

  font-weight: 600;
  font-size: 24px;
  line-height: 1.2;

  color: #3a3a3a;
`
export const ProductCategory = styled.p`
  margin-bottom: 8px;

  font-weight: 600;
  font-size: 16px;
  font-style: italic;
  line-height: 1.2;

  color: #898989;
`
export const ProductDesc = styled.p`
  margin-bottom: 8px;

  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;

  color: #898989;
`
export const ProductPrice = styled.p`
  font-weight: 600;
  font-size: 20px;
  line-height: 1.5;

  color: #3a3a3a;
`
export const ShowMoreBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  margin-top: 32px;
  border: 1px solid #e89f71;
  outline: none;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  text-transform: capitalize;

  color: #e89f71;
  background-color: #ffffff;

  @media screen and (min-width: 576px) {
    width: 245px;
    align-self: center;
  }
`
export const OverlayContent = styled.div`
  position: absolute;
  margin: 0;
  top: 50%;
  left: 42px;
  right: 42px;
  transform: translate(0, -50%);
  opacity: 0;
`
export const OverlayAddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 100%;
  margin-bottom: 26px;
  border: none;
  outline: none;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;

  color: #e89f71;
  background-color: #ffffff;
`
export const OverlayIconBtns = styled.div`
  display: flex;
  justify-content: space-around;
`
const IconBtns = css`
  display: inline-grid;
  grid-auto-flow: column;
  align-items: center;
  column-gap: 10px;
  border: none;
  outline: none;

  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  color: #ffffff;
  background-color: transparent;
`
export const OverlayShareBtn = styled.button`
  ${IconBtns}
`
export const OverlayFavoriteBtn = styled.button`
  ${IconBtns}
`
