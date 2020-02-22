import React, { useState } from "react";
import styled, { css } from "styled-components";
import { CartIcon } from "./CartIcon";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0px;
`;

// ${props =>
//   props.isCartModalOpen === true &&
//   css`
//     position: relative;
//     right: 20%;
//     z-index: 2;
//     color: white;
//   `}
// `;

export const Header = ({ toggleCartModal, itemsCountsInTheCart }) => {
  // const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  // const handleCartModal = () => {
  //   toggleCartModal && toggleCartModal();
  //   setIsCartModalOpen(!isCartModalOpen);
  // };
  return (
    <HeaderContainer>
      <CartIcon
        itemsCountsInTheCart={itemsCountsInTheCart}
        toggleCartModal={toggleCartModal}
      />
    </HeaderContainer>
  );
};
