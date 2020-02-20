import React from "react";
import styled from "styled-components";
import { SORT_PRODUCT_BY_SIZES } from "../../Constants";

const SizeButton = styled.button`
  width: 50px;
  height: 50px;
  text-decoration: none;
  display: inline-block;
  outline: none;
  cursor: pointer;
  border-style: none;
  color: black;
  background-color: lightgray;
  border-radius: 100%;
  overflow: none;
  text-align: center;
  font-weight: bold;
`;
export const ProductSizes = ({ products, addProductIntoCartHandler }) => {
  const onSizeClickHnadler = size => {
    addProductIntoCartHandler({
      type: SORT_PRODUCT_BY_SIZES,
      payload: {
        products: products,
        size: size
      }
    });
  };
  return (
    <div>
      <SizeButton key={"XS"} onClick={() => addProductIntoCartHandler("XS")}>
        XS
      </SizeButton>
      <SizeButton key={"S"} onClick={() => onSizeClickHnadler("S")}>
        S
      </SizeButton>
      <SizeButton key={"M"} onClick={() => onSizeClickHnadler("M")}>
        M
      </SizeButton>
      <SizeButton key={"ML"} onClick={() => onSizeClickHnadler("ML")}>
        ML
      </SizeButton>
      <SizeButton key={"L"} onClick={() => onSizeClickHnadler("L")}>
        L
      </SizeButton>
      <SizeButton key={"XL"} onClick={() => onSizeClickHnadler("XL")}>
        XL
      </SizeButton>
      <SizeButton key={"XLL"} onClick={() => onSizeClickHnadler("XXL")}>
        XXL
      </SizeButton>
    </div>
  );
};
