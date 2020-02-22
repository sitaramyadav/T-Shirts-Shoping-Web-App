import React, { useState, useReducer } from "react";
import { Header } from "./common/Header";
import { ProductList } from "./product/ProductList";
import productsdata from "../../data/products";
import { CartModal } from "./cart/CartModal";
import { reducer } from "../reducer";

export const Main = () => {
  const initialStore = {
    products: [...productsdata],
    cartItems: []
  };
  const [store, dispatch] = useReducer(reducer, initialStore);
  const [showCartModal, setShowModal] = useState(false);
  return (
    <>
      <Header
        toggleCartModal={() => setShowModal(!showCartModal)}
        itemsCountsInTheCart={store.cartItems.length}
      />
      <ProductList store={store} addProductIntoCartHandler={dispatch} />
      {showCartModal && (
        <CartModal
          store={store}
          manageCartItemsHandler={dispatch}
          toggleCartModal={() => setShowModal(!showCartModal)}
        />
      )}
    </>
  );
};
