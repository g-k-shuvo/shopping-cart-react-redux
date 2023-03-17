import {
  ADD_NEW_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_ITEM_QUANTITY,
  DECREMENT_ITEM_QUANTITY,
} from "./actionTypes";

export const addNewProduct = (product) => {
  return {
    type: ADD_NEW_PRODUCT,
    payload: product,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};

export const incrementItemQuantity = (id) => {
  return {
    type: INCREMENT_ITEM_QUANTITY,
    payload: {
      id,
    },
  };
};

export const decrementItemQuantity = (id) => {
  return {
    type: DECREMENT_ITEM_QUANTITY,
    payload: {
      id,
    },
  };
};
