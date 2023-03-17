import { ADD_NEW_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_PRODUCT:
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: state.products.length + 1,
            name: action.payload.name,
            category: action.payload.category,
            imageURL: action.payload.imageURL,
            price: action.payload.price,
            quantity: action.payload.quantity,
          },
        ],
      };

    case ADD_TO_CART:
      const productId = action.payload.id;
      const product = state.products.find((p) => p.id === productId);
      const existingCartItem = state.cart.find((item) => item.id === productId);

      if (existingCartItem) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === productId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });

        const updatedProducts = state.products.map((p) => {
          if (p.id === productId) {
            return { ...p, quantity: p.quantity - 1 };
          }
          return p;
        });

        return {
          ...state,
          products: updatedProducts,
          cart: updatedCart,
        };
      } else {
        const newCartItem = { ...product, quantity: 1 };
        const updatedCart = [...state.cart, newCartItem];

        const updatedProducts = state.products.map((p) => {
          if (p.id === productId) {
            return { ...p, quantity: p.quantity - 1 };
          }
          return p;
        });

        return {
          ...state,
          products: updatedProducts,
          cart: updatedCart,
        };
      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    case "INCREMENT_ITEM_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        }),
      };
    case "DECREMENT_ITEM_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            const newQuantity = item.quantity - 1;
            if (newQuantity < 0) {
              return item;
            } else {
              return {
                ...item,
                quantity: newQuantity,
              };
            }
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default reducer;
