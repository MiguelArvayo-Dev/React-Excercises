import { createContext, useReducer } from "react";

export const CartContext = createContext();

const initalState = JSON.parse(window.localStorage.getItem("cart")) || [];

/*export*/ function updateLocalStorage(state) {
  window.localStorage.setItem("cart", JSON.stringify(state));
}

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      const { id } = actionPayload;
      const productId = state.findIndex((item) => item.id === id);

      if (productId >= 0) {
        const newCart = structuredClone(state);
        newCart[productId].quantity += 1;
        updateLocalStorage(newCart);
        return newCart;
      }

      const newState = [...state, { ...actionPayload, quantity: 1 }];

      updateLocalStorage(newState);

      return newState;
    }

    case "REMOVE_FROM_CART": {
      const { id } = actionPayload;
      const productId = state.findIndex((item) => item.id === id);

      if (actionPayload.quantity > 1) {
        const newCart = structuredClone(state);
        newCart[productId].quantity -= 1;
        updateLocalStorage(newCart);
        return newCart;
      }

      const newState = state.filter((item) => item.id !== id);
      updateLocalStorage(newState);
      return newState;
    }

    case "CLEAR_CART": {
      return [];
    }
  }

  return state;
};

export function CartProvider({ children }) {
  //const [cart, setCart] = useState([]);

  const [state, dispatch] = useReducer(reducer, initalState);

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, clearCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
