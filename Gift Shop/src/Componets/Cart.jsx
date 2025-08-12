import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import "./Cart.css";
import { useCart } from "../hooks/useCart.js";

export function Cart() {
  const cartCheckBoxId = useId();

  const { addToCart, cart, clearCart, removeFromCart } = useCart();

  function CartItem({
    thumbnail,
    price,
    title,
    quantity,
    addToCart,
    id,
    removeFromCart,
  }) {
    return (
      <li key={id}>
        <img src={thumbnail} alt={title} />
        <div>
          <strong>{title}</strong> {price}
        </div>
        <footer>
          <small>Qty. {quantity}</small>
          <button onClick={addToCart}>+</button>
          <button onClick={removeFromCart}>-</button>
        </footer>
      </li>
    );
  }

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckBoxId}>
        <CartIcon />
      </label>
      <input id={cartCheckBoxId} type="checkbox" hidden />
      <aside className="cart">
        <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
        <ul>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              addToCart={() => addToCart(item)}
              removeFromCart={() => removeFromCart(item)}
              {...item}
            />
          ))}
        </ul>
      </aside>
    </>
  );
}
