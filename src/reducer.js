import {
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_FROM_CART,
  SORT_PRODUCT_BY_SIZES
} from "./Constants";

export function reducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        products: removeProduct(state.products, action.payload.id),
        cartItems: [
          ...state.cartItems,
          addProduct(state.products, action.payload.id)
        ]
      };
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: [
          ...state.products,
          addProduct(state.products, action.payload.id)
        ],
        cartItems: removeProduct(state.cartItems, action.payload.id)
      };

    case SORT_PRODUCT_BY_SIZES: {
      let products = [...state.products];
      orderBySize(products, action.payload.size);
      return {
        ...state,
        products
      };
    }
    case UPDATE_CART: {
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
