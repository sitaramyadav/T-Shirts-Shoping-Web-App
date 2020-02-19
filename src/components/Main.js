import React, { useState, useReducer } from "react";
import { Header } from "./common/Header";
import { ProductList } from "./product/ProductList";
import productsdata from "../../data/products";
import { CartModal } from "./cart/CartModal";
import { reducer } from "../reducer";

export const Main = () => {
  const initialStore = {
    products: productsdata,
    cartItems: []
  };
  const [store, dispatch] = useReducer(reducer, initialStore);
  const [showCartModal, setShowModal] = useState(false);
  console.log("Main ", store.cartItems.length);
  return (
    <>
      <Header toggleCartModal={() => setShowModal(!showCartModal)} />
      <ProductList store={store} addProductIntoCartHandler={dispatch} />
      {showCartModal && <CartModal cartItems={store.cartItems} />}
    </>
  );
};
