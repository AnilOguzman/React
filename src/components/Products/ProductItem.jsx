import {useState} from "react"
import "./ProductItem.css";
import ProductInfo from "./ProductInfo";

const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;
  const [title,setTitle] = useState(productName);
  const clickHandler = () =>
    {
      setTitle("Güncellendi");
      console.log(productName, "Güncellendi"); //id kullanmadan hangi kartın güncellendiğini state hooku sayesinde anladı
    };

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl}></img>
      </div>
      <ProductInfo>
        <h2>{title}</h2>
        <span>{productPrice} TL</span>
        <br />
        <button onClick={clickHandler}>Sepete Ekle</button>
      </ProductInfo>
    </div>
  ); //html içinde js kullanacağın zaman {} kullan
};
export default ProductItem;
