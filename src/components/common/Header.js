import React, { useState } from "react";
import styled from "styled-components";

import cartIcon from "../../../images/icons/cart.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 50px;
  width: 100;
  height: 70px;
`;

const CartIconContainer = styled.picture`
  width: 4%;
  background-color: black;
`;
const CartCounterStyle = styled.div`
  position: relative;
  font-size: 16px;
  color: white;
  left: 38px;
  background-color: yellow;
  width: 20px;
  height: 20px;
  border-radius: 50% 50%;
  color: black;
  font-weight: bold;
  position: relative;
  top: 10px;
  left: 57px;
`;
const CartCounter = styled.p`
  position: relative;
  color: black;
  font-size: 16px;
  bottom: 15px;
  left: 5px;
  font-weight: bold;
`;
const CartIcon = styled.img`
  height: 40px;
  cursor: pointer;
  position: relative;
  left: 10px;
`;

export const Header = ({ toggleCartModal, itemsCountsInTheCart }) => {
  return (
    <HeaderContainer>
      {itemsCountsInTheCart > 0 && (
        <CartCounterStyle>
          <CartCounter>{itemsCountsInTheCart}</CartCounter>
        </CartCounterStyle>
      )}
      <CartIconContainer>
        <CartIcon
          key={"Header"}
          onClick={() => toggleCartModal()}
          src={cartIcon}
          alt={"cart logo"}
        />
      </CartIconContainer>
    </HeaderContainer>
  );
};
