import React, { useState } from "react";
import { UPDATE_CART } from "../../Constants";

export const OrderByPrice = ({ products, cartProductHandler }) => {
  const [orderBy, setOrderBy] = useState("");
  console.log(orderBy, "orderBy====");
  const orderByPriceHandler = value => {
    setOrderBy(value);
    cartProductHandler({
      type: UPDATE_CART,
      payload: {
        orderBy: value,
        products: products
      }
    });
  };
  return (
    <select
      value={orderBy}
      onChange={() => orderByPriceHandler(event.target.value)}
    >
      <option></option>
      <option value="Lowest to highest">Lowest to highest</option>
      <option value="Higest to lowest">Higest to lowest</option>
    </select>
  );
};
