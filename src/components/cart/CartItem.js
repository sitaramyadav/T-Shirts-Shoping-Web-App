import React from "react";
import { UPDATE_CART, REMOVE_FROM_CART } from "../../Constants";
const images = require.context("../../../images/products", true);

import {
  TableRow,
  TableData,
  ProductInfo,
  ProductDetail,
  PriceSection,
  Icon
} from "./CartItemStyle";

export const CartItem = ({ product, index, manageCartItemsHandler }) => {
  const imageName = product.src_2.split("/")[2];
  let img = images("./" + imageName);
  console.log(img, "image");
  return (
    <TableRow key={`${index}}`}>
      <TableData>
        <ProductInfo>
          <picture>
            <img src={img.default} alt="Product Image" />
          </picture>
          <ProductDetail>
            <p key={`${index}${product.title}`}>{product.title}</p>
            {/* 
             There is no design to select specific size while adding the product into cart.
             so I am alway rendering the first available size into cart. */}
            <p>
              Size{" "}
              {product && product.availableSizes && product.availableSizes[0]}
            </p>
            <p>Quantity 1</p>
          </ProductDetail>
        </ProductInfo>
        <PriceSection>
          <p
            onClick={() => {
              manageCartItemsHandler({
                type: REMOVE_FROM_CART,
                payload: {
                  id: product.id,
                  pirce: product.price
                }
              });
            }}
          >
            X
          </p>
          <p key={`${index}${product.price}`}>$ {product.price}</p>
          <p>+</p>
        </PriceSection>
      </TableData>
    </TableRow>
  );
};
