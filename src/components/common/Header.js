import React, { useState } from "react";
import styled from "styled-components";

import cartIcon from "../../../images/icons/cart.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  margin: 10px 50px;
  width: 100;
`;

const CartIconContainer = styled.picture`
  width: 60px;
  background-color: black;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CartIcon = styled.img`
  cursor: pointer;
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
  top: 34px;
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
          onClick={() => toggleCartModal && toggleCartModal()}
          src={cartIcon}
          alt={"cart logo"}
        />
      </CartIconContainer>
    </HeaderContainer>
  );
};
