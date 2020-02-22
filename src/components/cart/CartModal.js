import React, { useState } from "react";
import styled, { css } from "styled-components";
import { CartItem } from "./CartItem";
import { CartIcon } from "../common/CartIcon";

const CartModelContainer = styled.section`
  position: absolute;
  top: 0%;
  background-color: white;

  display: flex;
  left: 52%;
  padding: 20px;
  width: 46%;
  background-color: black;
  color: white;
  flex-direction: column;
`;
const CartHeader = styled.header`
  display: flex;
`;
const CartIconStyle = styled.div`
  display: flex;
  position: relative;
  left: 50%;
`;
const CloseModal = styled.button`
  background: white;
  height: 50px;
  width: 50px;
  font-size: 24px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 800px;
  background-color: black;
  color: white;
  text-align: center;
`;
const CartList = styled.section`
  box-sizing: border-box;
`;
const commonStyleForTable = css`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px;
`;
const TableStyling = styled.table`
  ${commonStyleForTable}
  border-bottom: none;

  // width: 700px;
  margin: 60px 0 30px 0;
  box-sizing: border-box;
`;

const Checkout = styled.button`
  position: absolute;
  bottom: 30px;
  right: 50%;
  left: 50%;
  color: white;
  background-color: black;
  font-size: 16px;
  cursor: pointer;
  border: none;
  ${props =>
    props.disabled === true &&
    css`
      cursor: no-drop;
      opacity: 0.5;
    `}
`;

const SubTotal = styled.button``;

export const CartModal = ({
  store,
  manageCartItemsHandler,
  toggleCartModal
}) => {
  console.log(store.cartSubTotal, "ah ah a");
  const handleBuyNow = count => {
    alert(`You are buying ${count} product`);
    toggleCartModal(); // This is not something which is been asked from vidual desgin.
    // I am just adding for smooth jurney of this app user.
  };

  return (
    <>
      <CartModelContainer>
        <CartHeader>
          <CloseModal onClick={() => toggleCartModal()}>X</CloseModal>
        </CartHeader>
        <CartIconStyle>
          <CartIcon
            toggleCartModal={undefined}
            itemsCountsInTheCart={store.cartItems.length}
          />{" "}
          <p>Cart</p>
        </CartIconStyle>
        <CartList>
          <TableStyling>
            <tbody>
              {store.cartItems &&
                store.cartItems.map((product, index) => {
                  return (
                    <CartItem
                      product={product}
                      index={index}
                      key={`${index}`}
                      manageCartItemsHandler={manageCartItemsHandler}
                    />
                  );
                })}
            </tbody>
          </TableStyling>
        </CartList>
        <SubTotal>SubTotal: {store.cartSubTotal} </SubTotal>
        <Checkout
          onClick={() => handleBuyNow(store.cartItems.length)}
          disabled={store.cartItems.length <= 0}
        >
          CHECKOUT
        </Checkout>
      </CartModelContainer>
    </>
  );
};
