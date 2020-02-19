import React from "react";
import CartThumImageUrl from "../../../images/products/101_2.jpg";
import { UPDATE_CART, REMOVE_ITEM } from "../../Constants";

import {
  TableRow,
  TableData,
  ProductInfo,
  ProductDetail,
  ProductTitle,
  Price,
  TotalCostContainer,
  TrashIcon,
  TotalCost
} from "./CartItemStyle";

export const CartItem = ({ product, index, quantityChangeHandler }) => {
  console.log("product from caritemr", product);
  return (
    <TableRow key={`${index}${Math.random(0, 9)}}`}>
      <TableData>
        <ProductInfo>
          <picture>
            <img src={CartThumImageUrl} alt="Product Image" />
          </picture>
          <ProductDetail>
            <ProductTitle
              key={`${index}${product.productTitle}${Math.random(0, 9)}`}
            >
              {product.productTitle}
            </ProductTitle>
            <Price key={`${index}${product.price}${Math.random(0, 9)}`}>
              $ {product.price}
            </Price>
            <select
              value={product.quantity}
              onChange={event => {
                quantityChangeHandler({
                  type: UPDATE_CART,
                  payload: {
                    quantity: event.target.value,
                    price: product.price,
                    totalCost: product.totalCost,
                    productTitle: product.productTitle
                  }
                });
              }}
            >
              <option value={1}>{1}</option>
              <option value={2}>{2}</option>
              <option value={3}>{3}</option>
              <option value={4}>{4}</option>
            </select>
          </ProductDetail>
        </ProductInfo>
        <TotalCostContainer>
          <picture>
            <TrashIcon
              src="x"
              alt="Delete from cart"
              onClick={() => {
                quantityChangeHandler({
                  type: REMOVE_ITEM,
                  payload: {
                    quantity: product.quantity,
                    price: product.price,
                    totalCost: product.totalCost,
                    productTitle: product.productTitle
                  }
                });
              }}
            />
          </picture>
          <TotalCost key={`${index}${product.totalCost}`}>
            $ {product.totalCost}
          </TotalCost>
        </TotalCostContainer>
      </TableData>
    </TableRow>
  );
};
