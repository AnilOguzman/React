import "./ProductItem.css";
import ProductInfo from "./ProductInfo";

const ProductItem = ({ product }) => {
  const { imageUrl, productName, productPrice } = product;
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl}></img>
      </div>
      <ProductInfo>
        <h2>{productName}</h2>
        <span>{productPrice} TL</span>
      </ProductInfo>
    </div>
  ); //html içinde js kullanacağın zaman {} kullan
};
export default ProductItem;
