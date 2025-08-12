import { useContext } from "react";
import { CartContext } from "../Context/CartContex";

export function useCart() {
  const context = useContext(CartContext);

  if (context === undefined) {
    throw new Error("useCart muste be used within CartContext");
  }

  return context;
}
