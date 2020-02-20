import React, { useState } from "react";
import { UPDATE_CART } from "../../Constants";
import styled from "styled-components";

const OrderByPriceContainer = styled.div`
  display: flex;
  padding: 0 5px 0 5px;
`;
const Select = styled.select`
  font-size: 16px;
  padding: 0 5px 0 5px;
`;
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
    <OrderByPriceContainer>
      <p>
        Order By
        <Select
          value={orderBy}
          onChange={() => orderByPriceHandler(event.target.value)}
        >
          <option>Select</option>
          <option value="Lowest to highest">Lowest to highest</option>
          <option value="Higest to lowest">Higest to lowest</option>
        </Select>
      </p>
    </OrderByPriceContainer>
  );
};
