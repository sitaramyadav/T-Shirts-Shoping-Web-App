import React from "react";
import styled from "styled-components";
import { Product } from "./Product";
import { ProductSizes } from "./ProductSizes";
const MainContainer = styled.main`
  opacity: ${props => (props.showModel ? ".5" : "1")};
`;

const ProductListCataloge = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ProductList = ({ store, addProductIntoCartHandler }) => {
  return (
    <MainContainer>
      <ProductSizes
        products={store.products}
        addProductIntoCartHandler={addProductIntoCartHandler}
      ></ProductSizes>
      <ProductListCataloge>
        {store.products.map((product, index) => {
          return (
            <Product
              key={`${product.id}${index}`}
              product={product}
              addProductIntoCartHandler={addProductIntoCartHandler}
            />
          );
        })}
      </ProductListCataloge>
    </MainContainer>
  );
};
