import { useEffect, useState } from "react";
import { Cart } from "../models/cart.model";
import { deleteCart, fetchCart } from "../api/cart.api";

export const useCart = () => {
  const [carts, setCarts] = useState<Cart[]>([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const deleteCartItem = (id: number) => {
    deleteCart(id).then(() => {
      const newCarts = carts.filter((cart) => cart.id !== id)
      setCarts(newCarts);
      setIsEmpty(newCarts.length === 0);
    })
  }

  useEffect(() => {
    fetchCart().then((carts) => {
      setCarts(carts);
      setIsEmpty(carts.length === 0);
    })
  }, [])

  return { carts, isEmpty, deleteCartItem };
};
