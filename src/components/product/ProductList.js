import React from "react";
import styled from "styled-components";
import { Product } from "./Product";
import { ProductSizes } from "./ProductSizes";
import { OrderByPrice } from "./OrderByPrice";

const MainContainer = styled.main`
  opacity: ${props => (props.showModel ? ".5" : "1")};
`;

const ProductListCataloge = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ProductListHeader = styled.section``;

export const ProductList = ({ products, addProductIntoCartHandler }) => {
  return (
    <MainContainer>
      <ProductListHeader>
        <ProductSizes
          products={products}
          cartItemHandler={addProductIntoCartHandler}
        ></ProductSizes>
        <OrderByPrice
          products={products}
          cartProductHandler={addProductIntoCartHandler}
        ></OrderByPrice>
      </ProductListHeader>
      <ProductListCataloge>
        {products.map((product, index) => {
          return (
            <Product
              key={`${index}`}
              product={product}
              addProductIntoCartHandler={addProductIntoCartHandler}
            />
          );
        })}
      </ProductListCataloge>
    </MainContainer>
  );
};
