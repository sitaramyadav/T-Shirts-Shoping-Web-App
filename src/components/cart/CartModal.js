import React from "react";
import styled, { css } from "styled-components";
import { CartItem } from "./CartItem";

import { TableRow } from "./CartItemStyle";

const CartModelContainer = styled.section`
  position: absolute;
  top: 20%;
  background-color: white;
  display: flex;
  left: 29%;
  box-shadow: 10px 10px 5px #e1d9d9;
  padding: 20px;
  width: 800px;
  box-sizing: border-box;
  background-color: black;
  color: white;
`;
const commonStyleForTable = css`
  border-bottom: 2px solid black;
  border-collapse: collapse;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px;
`;
const TableStyling = styled.table`
  ${commonStyleForTable}
  border-top: 2px solid black;
  border-bottom: none;

  width: 700px;
  margin: 60px 0 30px 0;
  box-sizing: border-box;
`;

const CartList = styled.section`
  box-sizing: border-box;
`;
const TableHeading = styled.tr`
  ${commonStyleForTable}
`;

const SubTotal = styled.td`
  ${commonStyleForTable}

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 700px;
`;

const Total = styled.td`
  display: flex;
  flex-direction: flex-end;
  justify-content: flex-end;
  width: 700px;
  padding: 10px 0 10px;
`;
const CartTitle = styled.h3`
  position: absolute;
  top: 10px;
`;

const Checkout = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  background-color: red;
  font-size: 16px;
  cursor: pointer;
  ${props =>
    props.disabled === true &&
    css`
      cursor: no-drop;
      opacity: 0.5;
    `}
`;

const CloseModal = styled.button`
  background: white;
  height: 50px;
  width: 50px;
  font-size: 24px;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 0;
`;

export const CartModal = ({
  store,
  manageCartItemsHandler,
  toggleCartModal
}) => {
  const handleBuyNow = (subTotal, total, vat) => {
    setshowModel(false);
    alert(`{ subtotal: ${subTotal}, total: ${total} vat: ${(vat * 20) / 100}}`);
  };

  return (
    <>
      <CartModelContainer>
        <CloseModal onClick={() => toggleCartModal()}>X</CloseModal>
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
        <Checkout
          onClick={() => console.log("Needs to calculate subtotal here")}
          disabled={store.cartItems.length <= 0}
        >
          Checkout >>
        </Checkout>
      </CartModelContainer>
    </>
  );
};
