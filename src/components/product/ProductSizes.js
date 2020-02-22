import React from "react";
import styled from "styled-components";
import { SORT_PRODUCT_BY_SIZES } from "../../Constants";

const Sizes = styled.section`
  display: flex;
  width: 230px;
  flex-wrap: wrap;
  font-size: 16px;
`;
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
  margin: 3px;
  &:focus {
    background-color: black;
    color: white;
  }
`;
const ProductCount = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
`;
export const ProductSizes = ({ products, cartItemHandler }) => {
  const onSizeClickHnadler = size => {
    cartItemHandler({
      type: SORT_PRODUCT_BY_SIZES,
      payload: {
        products: products,
        size: size
      }
    });
  };
  return (
    <Sizes>
      <ProductCount>
        <p>Sizes:</p>
        <p>{`${products.length} Product(s) found`}</p>
      </ProductCount>{" "}
      <SizeButton key={"XS"} onClick={() => onSizeClickHnadler("XS")}>
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
    </Sizes>
  );
};
