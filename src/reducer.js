import {
  ADD_TO_CART,
  UPDATE_CART,
  REMOVE_ITEM,
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
          addProductIntoCart(state.products, action.payload.id)
        ]
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
    case UPDATE_CART: {
      const products = [...state.products];
      orderByPrice(products, action.payload.orderBy);
      products.reverse();
      return {
        ...state,
        products
      };
    }
    case REMOVE_ITEM:
      const length = state.cart.products.length;
      const products_ = length === 1 ? [] : [...state.cart];
      const indexToBeRemoved =
        length > 1 && products_.findIndex(action.payload);
      products_.splice(indexToBeRemoved, indexToBeRemoved + 1);
      const { vat_, subTotal_, totalCostIncludingVat } = cartProductComputation(
        products_
      );

      return {
        ...state,
        cart: {
          ...state.cart,
          products: products_,
          vat: vat_,
          subTotal: subTotal_,
          totalCostIncludingVat
        }
      };
    default:
      throw new Error();
  }
}

function cartProductComputation(products) {
  if (products.length === 0) {
    return {
      subTotal: 0,
      vat: 0,
      totalCostIncludingVat: 0
    };
  } else {
    const subTotal = computeSubTotal(products);
    const vat = (subTotal * (20 / 100)).toFixed(2);
    const totalCostIncludingVat = subTotal + vat;
    return { subTotal, vat, totalCostIncludingVat };
  }
}
function updateCartModalOnChange(state, payload) {
  return state.cart.products.map(product => {
    if (product.productTitle === payload.productTitle) {
      return {
        quantity: payload.quantity,
        productTitle: payload.productTitle,
        price: payload.price,
        totalCost: (Number(payload.price) * Number(payload.quantity)).toFixed(2)
      };
    } else {
      return {
        quantity: product.quantity,
        productTitle: product.productTitle,
        price: product.price,
        totalCost: (Number(payload.price) * Number(product.quantity)).toFixed(2)
      };
    }
  });
}

function computeSubTotal(products) {
  return products.reduce((acc, currProduct) => {
    return acc + Number(currProduct.price) * Number(currProduct.quantity);
  }, 0);
}

function addProductIntoCart(products, productId) {
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
