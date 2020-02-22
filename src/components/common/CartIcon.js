import React from "react";
import styled from "styled-components";

import cartIconSrc from "../../../images/icons/cart.png";
import { CartIconCounter } from "./CartIconCounter";

const CartIconContainer = styled.picture`
  width: 60px;
  background-color: #1b1920;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  cursor: pointer;
  position: relative;
  right: 10px;
`;

export const CartIcon = ({ toggleCartModal, itemsCountsInTheCart }) => {
  return (
    <CartIconContainer>
      <CartIconCounter itemsCountsInTheCart={itemsCountsInTheCart} />
      <Icon
        key={"Header"}
        onClick={() => toggleCartModal()}
        src={cartIconSrc}
        alt={"cart logo"}
      />
    </CartIconContainer>
  );
};
