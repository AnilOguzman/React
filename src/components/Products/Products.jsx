import ProductItem from "./ProductItem";
import "./Products.css";
import "./ProductInfo";
import { productData } from "../../productData";
import NewProduct from "../NewProduct/NewProduct";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(productData);
  return (
    <div className="product-wrapper">
      <NewProduct setProducts={setProducts} />
      <h1>Products</h1>
      <div className="products">
        {products.length === 0 ? (
          <p>Hiç ürün yok.</p>
        ) : (
          products.map((product) => (
            <ProductItem key={product.productName} product={product} products={products} setProducts={setProducts} />
          ))
        )}
      </div>
    </div>
  );
};
export default Products;
