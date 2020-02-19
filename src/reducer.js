import { ADD_TO_CART, UPDATE_CART, REMOVE_ITEM } from "./Constants";

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

    case UPDATE_CART: {
      const products = updateCartModalOnChange(state, action.payload);
      const { vat, subTotal, totalCostIncludingVat } = cartProductComputation(
        products
      );
      return {
        ...state,
        cart: {
          products,
          vat,
          subTotal,
          totalCostIncludingVat
        }
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

function filterCommonProduct(products) {
  const common = products[0];
  return products.filter(each => {
    if (common.title === each.title) {
      each.quantity = each.quantity + 1;
      each.totalCost = each.price + each.quantity;
    } else {
      return each;
    }
  });
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
