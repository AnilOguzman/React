/* eslint-disable react/prop-types */
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import Offcanvas from "../UI/Offcanvas";
import CartItem from "./CartItem";
import "./Cart.css";

const Cart = ({ onClose }) => {
  const {items,totalAmount,clearItem}=useContext(CartContext);
  const hasItems=items.length>0;
  const cartItem = (
    <ul className="cart-items">
      {items.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </ul>
  );
  return (
    <Offcanvas onClose={onClose}>
      <div className="cart-head">
        <h2>Sepetim</h2>
        <a href="/" className="cart-close" onClick={onClose}>
          X
        </a>
      </div>
      {cartItem}
      <div className="total">
        <span>Toplam Değer</span>
        <span>{totalAmount.toFixed(2)} ₺</span>
      </div>
      {hasItems && <div className="actions">
        <button className="cart-order">Sipariş Ver</button>
        <button className="cart-clear" onClick={clearItem}>Temizle</button>
      </div>}
      
    </Offcanvas>
  );
};

export default Cart;
