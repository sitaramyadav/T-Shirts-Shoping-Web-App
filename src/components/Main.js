import React, { useState } from "react";
import { ProductList } from "./product/ProductList";
import productsdata from "../../data/products";

export const Main = () => {
  const [products, setProducts] = useState(productsdata);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};
