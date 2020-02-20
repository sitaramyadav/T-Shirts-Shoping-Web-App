import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../common/PraimaryButton";
import { ADD_TO_CART } from "../../Constants";
const images = require.context("../../../images", true);

const CardContainer = styled.li`
  list-style-type: none;
  width: 400px;
`;

const CartFooter = styled.figcaption`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const ButtonAddToCart = styled(PrimaryButton)`
  // cursor: ${props => (props.showModel ? "no-drop;" : "pointer")};
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

const Price = styled.p`
  font-weight: bold;
`;
export const Product = ({ product, addProductIntoCartHandler }) => {
  let imageName;
  if (product && product.src_1) {
    imageName = product.src_1;
  }
  let img = images("." + imageName);
  const formatedPrice = `${product.currencyFormat}${product.price}`;
  return (
    <CardContainer>
      {product.isFreeShipping && <FreeShipping>Free Shipping</FreeShipping>}
      <picture>
        <ProductImage src={img.default} alt={"Product Image"} />
        <figcaption>{product.title}</figcaption>
        <p>Available Sizes {product.availableSizes.join(" ")}</p>
      </picture>
      <CartFooter>
        <Price>Price: {formatedPrice}</Price>
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
      </CartFooter>
    </CardContainer>
  );
};
