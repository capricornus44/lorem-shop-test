import React, { useState, useEffect } from "react"

import {
  ProductsSection,
  ProductsWrapper,
  Advantages,
  AdvantagesItem,
  ProductsGallery,
  ProductsGalleryTitle,
  ProductsList,
  ProductCard,
} from "./ProductsStyled"
import gobletIcon from "../../assests/icons/goblet.svg"
import protectionIcon from "../../assests/icons/protection.svg"
import freeIcon from "../../assests/icons/free-shipping.svg"
import supportIcon from "../../assests/icons/support.svg"

import { fetchProducts } from "../../services/fakeStoreAPI"

const Products = () => {
  const [ourProducts, setOurProducts] = useState([])

  const getProducts = async () => {
    setOurProducts(await fetchProducts())
  }

  useEffect(() => {
    getProducts()
  }, [])

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
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p className="category">{product.category}</p>
                <p className="description">{product.description}</p>
                <p className="price">{`${product.price} $`}</p>
              </ProductCard>
            ))}
          </ProductsList>
        </ProductsGallery>
      </ProductsWrapper>
    </ProductsSection>
  )
}

export default Products
