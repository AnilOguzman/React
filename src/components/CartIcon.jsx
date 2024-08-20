import { FiShoppingCart } from "react-icons/fi";

import { CartContext } from "../context/CartContext";
import { useContext } from "react";

const CartIcon = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="relative">
      <FiShoppingCart className="text-2xl" onClick={() => setMyState("Emir")} />

      {cart.length > 0 && (
        <span className="bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full absolute -top-2 -right-4 text-xs">
          {cart.length}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
