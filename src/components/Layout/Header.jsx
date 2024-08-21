/* eslint-disable react/prop-types */
import HeaderCartButton from "./HeaderCartButton";
import "./Header.css"

const Header = ({onShowCart}) => {
  return (
    <header className="header">
      <h1>Trend Store</h1>
      <HeaderCartButton onShowCart={onShowCart}/>
    </header>
  );
};

export default Header;
