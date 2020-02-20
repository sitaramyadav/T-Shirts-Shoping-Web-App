import React from "react";
import { UPDATE_CART, REMOVE_FROM_CART } from "../../Constants";
const images = require.context("../../../images/products", true);

import {
  TableRow,
  TableData,
  ProductInfo,
  ProductDetail,
  ProductTitle,
  Price,
  TotalCostContainer as PriceSection,
  TrashIcon,
  TotalCost
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
            <ProductTitle key={`${index}${product.title}`}>
              {product.title}
            </ProductTitle>
            <Price key={`${index}${product.price}`}>$ {product.price}</Price>
            {/* as per desgin
             There is no option to select specific size while adding the product into cart.
             so I am alway rendering the first available size into cart. */}
            <p>
              {product && product.availableSizes && product.availableSizes[0]}
            </p>
          </ProductDetail>
        </ProductInfo>
        <PriceSection>
          <picture>
            <TrashIcon
              src="x"
              alt="Delete from cart"
              onClick={() => {
                manageCartItemsHandler({
                  type: REMOVE_FROM_CART,
                  payload: {
                    id: product.id
                  }
                });
              }}
            >
              X
            </TrashIcon>
          </picture>
        </PriceSection>
      </TableData>
    </TableRow>
  );
};
