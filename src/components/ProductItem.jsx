import "./ProductItem.css";
function ProductItem({product}) {
    const {imageUrl,productName,productPrice}=product;
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl}></img>
      </div>
      <div className="product-info">
        <h2>{productName}</h2>
        <span>{productPrice} TL</span>
      </div>
    </div>
  ); //html içinde js kullanacağın zaman {} kullan
}
export default ProductItem;

