import React from "react";
import styled from "styled-components";
import { PrimaryButton } from "../common/PraimaryButton";

const images = require.context("../../../images/products", true);

const CardContainer = styled.li`
  list-style-type: none;
  width: 430px;
`;

const CartFooter = styled.figcaption`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;
const ButtonAddToCart = styled(PrimaryButton)`
  // cursor: ${props => (props.showModel ? "no-drop;" : "pointer")};
`;

const IconAddToCart = styled.img`
  margin: 17px 10px 0 0;
`;

const ProductImage = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProductTitle = styled.h3`
  margin: 20px 0 2px 0px;
`;

const Price = styled.p`
  font-weight: bold;
`;
export const Product = ({
  image,
  price,
  currencyFormat,
  isFreeShipping,
  title
}) => {
  const imageName = image.split("/")[2];
  let img = images("./" + imageName);
  return (
    <CardContainer>
      {isFreeShipping && <button>Free Shoping</button>}
      <picture>
        <ProductImage src={img.default} alt={"Product Image"} />
        <figcaption>{title}</figcaption>
      </picture>
      <CartFooter>
        <Price>Price: {`${currencyFormat}${price}`}</Price>
        <ButtonAddToCart onClick={() => console.log("butoon add to cart")}>
          <p>ADD TO CART</p>
        </ButtonAddToCart>
      </CartFooter>
    </CardContainer>
  );
};
