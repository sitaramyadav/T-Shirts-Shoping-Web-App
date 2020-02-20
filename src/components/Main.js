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
  console.log(showCartModal, "added items into cart");
  return (
    <>
      <Header toggleCartModal={() => setShowModal(!showCartModal)} />
      <ProductList
        products={store.products}
        addProductIntoCartHandler={dispatch}
      />
      {showCartModal && (
        <CartModal
          cartItems={store.cartItems}
          manageCartItemsHandler={dispatch}
        />
      )}
    </>
  );
};
