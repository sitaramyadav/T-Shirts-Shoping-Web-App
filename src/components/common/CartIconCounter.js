import React from "react";

import styled from "styled-components";

const CartCounterStyle = styled.div`
  font-size: 16px;
  color: white;
  background-color: yellow;
  width: 20px;
  height: 20px;
  border-radius: 50% 50%;
  font-weight: bold;
  position: relative;
  top: 18px;
  left: 34px;
`;
const CartCounter = styled.p`
  position: relative;
  color: black;
  font-size: 16px;
  bottom: 15px;
  left: 5px;
  font-weight: bold;
`;
export const CartIconCounter = ({ itemsCountsInTheCart }) => {
  return (
    itemsCountsInTheCart > 0 && (
      <CartCounterStyle>
        <CartCounter>{itemsCountsInTheCart}</CartCounter>
      </CartCounterStyle>
    )
  );
};
