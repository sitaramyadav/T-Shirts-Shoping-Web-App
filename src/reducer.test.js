import { reducer } from "./reducer";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SORT_PRODUCT_BY_SIZES
} from "./Constants";
import productsdata from "../data/products";
describe("Reducer", () => {
  let store, action;
  beforeEach(() => {
    store = { products: [...productsdata], cartItems: [] };
    action = {
      type: ADD_TO_CART,
      payload: { id: productsdata[0].id, price: productsdata[0].price }
    };
  });

  it("Should add product from store and remove that product from store", () => {
    const updatedState = reducer(store, action);
    expect(updatedState.cartItems.length).toEqual(1);
    expect(store.products[0]).toEqual(updatedState.cartItems[0]);
    expect(store.products.length - 1).toEqual(updatedState.products.length);
  });

  it("Should Remove product from cart and add to Store", () => {
    const addedProductIntoCart = reducer(store, action);

    const removeAction = {
      type: REMOVE_FROM_CART,
      payload: {
        id: addedProductIntoCart.cartItems[0].id,
        price: addedProductIntoCart.cartItems[0].price
      }
    };

    const addedProductIntoStore = reducer(addedProductIntoCart, removeAction);

    expect(addedProductIntoStore.cartItems.length).toEqual(0);
    expect(addedProductIntoCart.products.length + 1).toEqual(
      store.products.length
    );
  });

  it("Should sort the products by sizes", () => {
    const products = [
      { id: 9, availableSizes: ["M", "XL"] },
      { id: 10, availableSizes: ["L", "XL"] },
      { id: 2, availableSizes: ["M", "XL"] }
    ];
    const action = {
      type: SORT_PRODUCT_BY_SIZES,
      payload: { size: "M" }
    };

    const expectedResult = [
      { id: 9, availableSizes: ["M", "XL"] },
      { id: 2, availableSizes: ["M", "XL"] },
      { id: 10, availableSizes: ["L", "XL"] }
    ];
    const updatedState = reducer({ products }, action);

    expect(updatedState.products).toEqual(expectedResult);
  });
});
