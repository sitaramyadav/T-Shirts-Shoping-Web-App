import React from "react";
import styled, { css } from "styled-components";
import { CartItem } from "./CartItem";
import { CartIcon } from "../common/CartIcon";

const CartModelContainer = styled.section`
  position: absolute;
  top: 0%;
  left: 52%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 46%;
  background-color: #1b1920;
  color: white;
`;
const CartHeader = styled.header`
  display: flex;
`;
const CloseModal = styled.button`
  background-color: #1b1920;
  height: 50px;
  width: 50px;
  font-size: 24px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0px;
  right: 643px;
  color: white;
`;
const CartIconStyle = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
`;
const CartList = styled.section`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
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
  margin: 60px 0 30px 0;
  box-sizing: border-box;
`;

const SubTotal = styled.div`
  color: white;
  font-size: 16px;
  border: none;
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 30px;
  margin: 20px 0 20px 0;
`;

const Checkout = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  color: white;
  background-color: black;
  font-size: 16px;
  cursor: pointer;
  border: none;
  width: 100%;
  height: 43px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0 20px 0;
  ${props =>
    props.disabled === true &&
    css`
      cursor: no-drop;
      opacity: 0.5;
    `}
`;

export const CartModal = ({
  store,
  manageCartItemsHandler,
  toggleCartModal
}) => {
  const handleCheckout = count => {
    alert(`You are buying ${count} product`);
    toggleCartModal(); // This is not something which is been asked from visual design.
    // I am just adding for smooth jurney from user presepective
  };

  return (
    <>
      <CartModelContainer>
        <CartHeader>
          <CloseModal onClick={() => toggleCartModal()}>X</CloseModal>
        </CartHeader>
        <CartIconStyle>
          <CartIcon
            toggleCartModal={""}
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
                      removeCartItem={manageCartItemsHandler}
                    />
                  );
                })}
            </tbody>
          </TableStyling>
        </CartList>
        <SubTotal>
          <p>SUBTOTAL </p>
          <p>{parseInt(store.cartSubTotal).toFixed(2)}</p>{" "}
        </SubTotal>
        <Checkout
          onClick={() => handleCheckout(store.cartItems.length)}
          disabled={store.cartItems.length <= 0}
        >
          CHECKOUT
        </Checkout>
      </CartModelContainer>
    </>
  );
};
