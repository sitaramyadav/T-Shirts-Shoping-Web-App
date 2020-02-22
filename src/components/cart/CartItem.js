import React from "react";
import styled from "styled-components";

import { REMOVE_FROM_CART } from "../../Constants";

const images = require.context("../../../images/products", true);

const TableRow = styled.tr`
  width: 100%;
  position: relative;
`;
const TableData = styled.td`
  box-sizing: border-box;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProductInfo = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PriceSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 0;
`;

const RemoveButton = styled.button`
  background-color: black;
  border: none;
  color: darkGray;
  cursor: pointer;
  font-size: 16px;
`;

const ProductDetail = styled.section`
  margin-left: 10px;
  box-sizing: border-box;
`;
const Text = styled.p`
  font-size: 16px;
  color: white;
`;

const PlusIcon = styled(RemoveButton)`
  background-color: black;
`;

export const CartItem = ({ product, index, removeCartItem }) => {
  const imageName = product.src_2.split("/")[2];
  let img = images("./" + imageName);
  return (
    <TableRow key={`${index}}`}>
      <TableData>
        <ProductInfo>
          <picture>
            <img src={img.default} alt="Product Image" />
          </picture>
          <ProductDetail>
            <Text key={`${index}${product.title}`}>{product.title}</Text>
            {/* 
             There is no design to select specific size while adding the product into cart.
             so I am alway rendering the first available size into cart. */}
            <Text>
              Size{" "}
              {product && product.availableSizes && product.availableSizes[0]}
            </Text>
            <Text>Quantity 1</Text>
          </ProductDetail>
        </ProductInfo>
        <PriceSection>
          <Text>
            <RemoveButton
              onClick={() => {
                removeCartItem({
                  type: REMOVE_FROM_CART,
                  payload: {
                    id: product.id,
                    price: product.price
                  }
                });
              }}
            >
              X
            </RemoveButton>
          </Text>
          <Text key={`${index}${product.price}`}>$ {product.price}</Text>
          <PlusIcon>+</PlusIcon>
        </PriceSection>
      </TableData>
    </TableRow>
  );
};
