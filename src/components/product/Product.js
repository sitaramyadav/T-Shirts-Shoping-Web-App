import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../common/PraimaryButton";
import { ADD_TO_CART } from "../../Constants";
const images = require.context("../../../images", true);

const ProductContainer = styled.li`
  list-style-type: none;
  width: 400px;
`;

const ProductFooter = styled.footer`
  display: flex;
  justify-content: center;
  margin: 10px 0 0 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ButtonAddToCart = styled(PrimaryButton)`
  width: 205px;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const FreeShipping = styled.button`
  background-color: black;
  color: white;
  position: relative;
  left: 60%;
`;
const FigCaption = styled.figcaption`
  text-align: center;
  margin: 5px;
`;
const Price = styled.p`
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;
export const Product = ({ product, addProductIntoCartHandler }) => {
  let imageName;
  if (product && product.src_1) {
    imageName = product.src_1;
  }
  let img = images("." + imageName);
  const formatedPrice = `${product.currencyFormat}${product.price}`;
  return (
    <ProductContainer>
      {product.isFreeShipping && <FreeShipping>Free Shipping</FreeShipping>}
      <picture>
        <ProductImage src={img.default} alt={"Product Image"} />
        <FigCaption>{product.title}</FigCaption>
        <FigCaption>
          Available Sizes {product.availableSizes.join(" ")}
        </FigCaption>
      </picture>
      <ProductFooter>
        <Price>{formatedPrice}</Price>
        <ButtonAddToCart
          onClick={() =>
            addProductIntoCartHandler({
              type: ADD_TO_CART,
              payload: {
                id: product.id
              }
            })
          }
        >
          <p>ADD TO CART</p>
        </ButtonAddToCart>
      </ProductFooter>
    </ProductContainer>
  );
};
