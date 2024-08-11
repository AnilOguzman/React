import "./ProductItem.css"
function ProductItem() {
  return (
    <div className="product-item">
      <div className="product-image">
        <img src="https://cdn.akakce.com/grundig/grundig-pc-2560-b1-i7-1-tb-z.jpg"></img>
      </div>
      <div className="product-info">
        <h2>Bilgisayar</h2>
        <span>4 TL</span>
      </div>
    </div>
  );
}
export default ProductItem;
