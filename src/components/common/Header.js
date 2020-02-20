import React, { useState } from "react";
import styled from "styled-components";

import cartIcon from "../../../images/icons/cart.png";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  margin: 10px 50px;
  height: 100%;
`;

const CartIcon = styled.img`
  width: 50px;
  cursor: pointer;
`;

const CartIconContainer = styled.picture`
  height: 100%;
  widht: 50%;
  background-color: black;
`;

export const Header = ({ toggleCartModal }) => {
  return (
    <HeaderContainer>
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
