import ProductItem from "./ProductItem";
import "./Products.css";
function Products() {
  const imageUrl =
    "https://cdn.akakce.com/grundig/grundig-pc-2560-b1-i7-1-tb-z.jpg";
  const productName = "Grundig";
  const productPrice = 40000;
  return (
    <div className="product-wrapper">
      <h1>Products</h1>
      <div className="products">
        <ProductItem
          imageUrl={imageUrl}
          productName={productName}
          productPrice={productPrice}
        />
        <ProductItem
          imageUrl="https://www.atombilisim.com.tr/Data/EditorFiles/blog/12-05-2023/masaustu-bilgisayar/bilgisayar-fiyatlari-masaustu.jpg"
          productName="Oyuncu Bilgisayarı"
          productPrice="60000"
        />
      </div>
    </div>
  );
}
export default Products;
