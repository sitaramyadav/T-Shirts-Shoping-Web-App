import React from "react";
import styled from "styled-components";
import { Product } from "./Product";

const MainContainer = styled.main`
  opacity: ${props => (props.showModel ? ".5" : "1")};
`;

const ProductListCataloge = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const ProductList = ({ products }) => {
  console.log(products, "from produvtl lsit");
  return (
    <MainContainer>
      <ProductListCataloge>
        {products &&
          products.map((product, index) => {
            return (
              <Product
                key={`${product.id}${index}`}
                name={product.name}
                image={product.src_1}
                price={product.price}
                currencyFormat={product.currencyFormat}
                isFreeShipping={product.isFreeShipping}
                title={product.title}
              />
            );
          })}
      </ProductListCataloge>
    </MainContainer>
  );
};
