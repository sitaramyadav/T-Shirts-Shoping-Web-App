import React from "react";
import styled from "styled-components";
import { Product } from "./Product";
import { ProductSizes } from "./ProductSizes";
import { OrderByPrice } from "./OrderByPrice";

const MainContainer = styled.main``;

const ProductListCataloge = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const ProductCountAndSizes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 230px;
`;

const ProductListHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const ProductList = ({ store, addProductIntoCartHandler }) => {
  return (
    <MainContainer>
      <ProductListHeader>
        <ProductCountAndSizes>
          <ProductSizes
            products={store.products}
            cartItemHandler={addProductIntoCartHandler}
          ></ProductSizes>
        </ProductCountAndSizes>
        <OrderByPrice
          products={store.products}
          cartProductHandler={addProductIntoCartHandler}
        ></OrderByPrice>
      </ProductListHeader>

      <ProductListCataloge>
        {store.products.map((product, index) => {
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
