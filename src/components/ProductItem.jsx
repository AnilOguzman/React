import "./ProductItem.css";
function ProductItem(props) {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src={props.imageUrl}></img>
      </div>
      <div className="product-info">
        <h2>{props.productName}</h2>
        <span>{props.productPrice} TL</span>
      </div>
    </div>
  ); //html içinde js kullanacağın zaman {} kullan
}
export default ProductItem;
