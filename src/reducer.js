import {
  ADD_TO_CART,
  ORDER_PRICES,
  REMOVE_FROM_CART,
  SORT_PRODUCT_BY_SIZES
} from "./Constants";

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const cartSubTotal = computeSubTotal(
        state.cartItems,
        action.payload.price
      );
      return {
        ...state,
        products: removeProduct(state.products, action.payload.id),
        cartItems: [
          ...state.cartItems,
          addProduct(state.products, action.payload.id)
        ],
        cartSubTotal: cartSubTotal
      };
    }
    case REMOVE_FROM_CART: {
      const cartSubTotal = state.cartSubTotal - action.payload.price;

      return {
        ...state,
        products: [
          ...state.products,
          addProduct(state.cartItems, action.payload.id)
        ],
        cartItems: removeProduct(state.cartItems, action.payload.id),
        cartSubTotal
      };
    }

    case SORT_PRODUCT_BY_SIZES: {
      let products = [...state.products];
      orderBySize(products, action.payload.size);
      return {
        ...state,
        products
      };
    }
    case ORDER_PRICES: {
      const products = [...state.products];
      orderByPrice(products, action.payload.orderBy);
      products.reverse();
      return {
        ...state,
        products
      };
    }

    default:
      throw new Error();
  }
}

function computeSubTotal(products, initial) {
  if (products.length === 0) {
    return initial;
  }

  return products.reduce((acc, currProduct) => {
    return acc + parseInt(currProduct.price);
  }, initial);
}
function addProduct(products, productId) {
  return products.find(product => product.id === productId);
}

function removeProduct(products, productId) {
  return products.filter(product => product.id !== productId);
}

function orderBySize(products, size) {
  products.sort((firstProduct, secondProduct) => {
    if (
      firstProduct.availableSizes.includes(size) &&
      !secondProduct.availableSizes.includes(size)
    ) {
      return -1;
    }
    if (
      !secondProduct.availableSizes.includes(size) &&
      firstProduct.availableSizes.includes(size)
    ) {
      return 1;
    }
    return 0;
  });
}

function orderByPrice(products, orderByPrice) {
  products.sort((firstProduct, secondProduct) => {
    return firstProduct.price - secondProduct.price;
  });
  if (orderByPrice === "Lowest to highest") {
    products.reverse();
  }
}
