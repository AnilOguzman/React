import ProductItem from "./ProductItem";
import "./Products.css";

const productData = [
  {
    imageUrl: "https://cdn.akakce.com/grundig/grundig-pc-2560-b1-i7-1-tb-z.jpg",
    productName: "Grundig",
    productPrice: 40000,
  },
  {
    imageUrl:
      "https://www.atombilisim.com.tr/Data/EditorFiles/blog/12-05-2023/masaustu-bilgisayar/bilgisayar-fiyatlari-masaustu.jpg",
    productName: "Oyuncu Bilgisayarı",
    productPrice: 60000,
  },
  {
    imageUrl:
      "https://cdn.vatanbilgisayar.com/Upload/PRODUCT/msi/thumb/138089-1_small.jpg",
    productName: "MSI",
    productPrice: 50000,
  },
];
function Products() {
  return (
    <div className="product-wrapper">
      <h1>Products</h1>
      <div className="products">
        {productData.map((product) => {
          return <ProductItem 
          key={product.productName} 
          product={product} />;
        })}
      </div>
    </div>
  );
}
export default Products;
