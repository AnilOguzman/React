import { useState } from "react";
import "./ProductItem.css";
import ProductInfo from "./ProductInfo";
import Counter from "../Counter";

const ProductItem = ({ product, products, setProducts }) => {
  const { imageUrl, productName, productPrice } = product;
  const [title, setTitle] = useState(productName);

  const clickHandler = () => {
    setTitle("Güncellendi");
    console.log(productName, "Güncellendi"); //id kullanmadan hangi kartın güncellendiğini state hooku sayesinde anladı
  };

  const deleteHandler = () => {
    setProducts(
      products.filter((item) => item.productName !== product.productName)
    );
  };

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl}></img>
      </div>
      <ProductInfo>
        <h2>{title}</h2>
        <Counter productPrice={productPrice}>
          <span>₺</span>
        </Counter>
        <br />
        <button onClick={clickHandler}>Sepete Ekle</button>
        <button onClick={deleteHandler} className="btn-delete">
          Sil!
        </button>
      </ProductInfo>
    </div>
  ); //html içinde js kullanacağın zaman {} kullan
};
export default ProductItem;
