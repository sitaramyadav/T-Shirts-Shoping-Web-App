import React from "react";
import CartThumImageUrl from "../../../images/products/101_2.jpg";
import { UPDATE_CART, REMOVE_ITEM } from "../../Constants";
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
  console.log("product from caritemr@@@@@@@@@@@@@@", product);
  const imageName = product.src_2.split("/")[2];
  let img = images("./" + imageName);
  console.log(img, "image");
  return (
    <TableRow key={`${index}${Math.random(0, 9)}}`}>
      <TableData>
        <ProductInfo>
          <picture>
            <img src={img.default} alt="Product Image" />
          </picture>
          <ProductDetail>
            <ProductTitle key={`${index}${product.title}${Math.random(0, 9)}`}>
              {product.title}
            </ProductTitle>
            <Price key={`${index}${product.price}${Math.random(0, 9)}`}>
              $ {product.price}
            </Price>
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
                quantityChangeHandler({
                  type: REMOVE_ITEM,
                  payload: {
                    id: product.id
                  }
                });
              }}
            />
          </picture>
        </PriceSection>
      </TableData>
    </TableRow>
  );
};
