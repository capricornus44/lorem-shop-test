import styled from "styled-components"

export const ProductsSection = styled.section`
  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 50px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 82px;
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

  @media screen and (min-width: 480px) {
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

  @media screen and (min-width: 1440px) {
    margin-top: 104px;
  }
`
export const ProductsGalleryTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  line-height: 1.2;
  text-align: center;
  text-transform: capitalize;
  color: #3a3a3a;

  @media screen and (min-width: 480px) {
    font-size: 40px;
  }
`
export const ProductsList = styled.ul`
  margin-top: 32px;
`
export const ProductCard = styled.li`
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

  img {
    margin-bottom: 16px;
  }

  h3 {
    margin-bottom: 8px;

    font-weight: 600;
    font-size: 24px;
    line-height: 1.2;

    color: #3a3a3a;
  }

  .category {
    margin-bottom: 8px;

    font-weight: 600;
    font-size: 16px;
    font-style: italic;
    line-height: 1.2;

    color: #898989;
  }

  .description {
    margin-bottom: 8px;

    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;

    color: #898989;
  }

  .price {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;

    color: #3a3a3a;
  }
`
