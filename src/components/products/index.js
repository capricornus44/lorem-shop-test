import React, { useState, useEffect } from "react"
import axios from "axios"
import { IoHeartOutline, IoShareSocial } from "react-icons/io5"

import {
  ProductsSection,
  ProductsWrapper,
  Advantages,
  AdvantagesItem,
  ProductsGallery,
  ProductsGalleryTitle,
  ProductsList,
  ProductCard,
  ProductCardThumb,
  ProductImage,
  ProductCardContent,
  ProductName,
  ProductCategory,
  ProductDesc,
  ProductPrice,
  ShowMoreBtn,
  OverlayContent,
  OverlayAddBtn,
  OverlayIconBtns,
  OverlayShareBtn,
  OverlayFavoriteBtn,
} from "./ProductsStyled"

import gobletIcon from "../../assests/icons/goblet.svg"
import protectionIcon from "../../assests/icons/protection.svg"
import freeIcon from "../../assests/icons/free-shipping.svg"
import supportIcon from "../../assests/icons/support.svg"

const Products = () => {
  const [ourProducts, setOurProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")

  useEffect(() => {
    const getProducts = async () => {
      try {
        setIsLoading(true)

        const response = await axios.get("https://fakestoreapi.com/products?page=${currentPage}&limit=8")
        setOurProducts((ourProducts) => [...ourProducts, ...response.data])
        setErrorMsg("")
      } catch (error) {
        setErrorMsg("Error while loading data. Try again later.")
      } finally {
        setIsLoading(false)
      }
    }
    getProducts()
  }, [currentPage])

  const loadMore = () => {
    setCurrentPage((currentPage) => currentPage + 1)
  }

  return (
    <ProductsSection>
      <ProductsWrapper>
        <Advantages>
          <AdvantagesItem>
            <img src={gobletIcon} alt="goblet" />
            <h4>High quality</h4>
            <p>crafted from top materials</p>
          </AdvantagesItem>
          <AdvantagesItem>
            <img src={protectionIcon} alt="warranty icon" />
            <h4>Warranty protection</h4>
            <p>Over 2 years</p>
          </AdvantagesItem>
          <AdvantagesItem>
            <img src={freeIcon} alt="hand with case" />
            <h4>Free shipping</h4>
            <p>Order over 150 $</p>
          </AdvantagesItem>
          <AdvantagesItem>
            <img src={supportIcon} alt="headphones" />
            <h4>24 / 7 support</h4>
            <p>Dedicated support</p>
          </AdvantagesItem>
        </Advantages>
        <ProductsGallery>
          <ProductsGalleryTitle>Our products</ProductsGalleryTitle>
          <ProductsList>
            {ourProducts.map((product) => (
              <ProductCard key={product.id}>
                <ProductCardThumb>
                  <ProductImage src={product.image} alt={product.title} />
                </ProductCardThumb>
                <ProductCardContent>
                  <ProductName>{product.title}</ProductName>
                  <ProductCategory>{product.category}</ProductCategory>
                  <ProductDesc>{product.description}</ProductDesc>
                  <ProductPrice>{`${product.price} $`}</ProductPrice>
                </ProductCardContent>
                <OverlayContent className="overlay">
                  <OverlayAddBtn type="button">Add to cart</OverlayAddBtn>
                  <OverlayIconBtns>
                    <OverlayShareBtn>
                      <IoShareSocial fontSize="20" />
                      Share
                    </OverlayShareBtn>
                    <OverlayFavoriteBtn>
                      <IoHeartOutline fontSize="20" />
                      Like
                    </OverlayFavoriteBtn>
                  </OverlayIconBtns>
                </OverlayContent>
              </ProductCard>
            ))}
          </ProductsList>
          {errorMsg && (
            <p>
              <strong>{errorMsg}</strong>
            </p>
          )}
          <ShowMoreBtn onClick={loadMore}>{isLoading ? "Loading..." : "Show more"}</ShowMoreBtn>
        </ProductsGallery>
      </ProductsWrapper>
    </ProductsSection>
  )
}

export default Products
