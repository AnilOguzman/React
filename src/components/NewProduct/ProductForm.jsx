import { useState } from "react";
import "./ProductForm.css";
const ProductForm = () => {
  const [productData, setProductData] = useState({
    productName: "",
    productPrice: "",
    imageUrl: "",
  });
  const titleChangeHandler = (event) => {
    setProductData({
      ...productData,
      productName: event.target.value,
    });
  };
  const priceChangeHandler = (event) => {
    setProductData({
      ...productData,
      productPrice: event.target.value,
    });
  };
  const imageChangeHandler = (event) => {
    setProductData({
      ...productData,
      imageUrl: event.target.value,
    });
  };

  return (
    <form className="product-form">
      <div className="product-form-input">
        <label>Ürün Adı </label>
        <input
          type="text"
          placeholder="Ürün Adı Giriniz..."
          onChange={titleChangeHandler}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Fiyatı </label>
        <input
          type="number"
          placeholder="Ürün Fiyatı Giriniz..."
          onChange={priceChangeHandler}
        />
      </div>
      <div className="product-form-input">
        <label>Ürün Görseli </label>
        <input
          type="text"
          placeholder="Ürün Görseli Giriniz..."
          onChange={imageChangeHandler}
        />
      </div>
      <button className="product-form-button">Ürün Ekle</button>
    </form>
  );
};

export default ProductForm;
