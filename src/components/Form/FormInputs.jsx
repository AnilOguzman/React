/* eslint-disable react/prop-types */

//bu sayfa kullanılmıyor çünkü kullandığımız api açık değil
import { useState } from "react";
import useHttp from "../hooks/use-http";
import "./FormInputs.css";

const initialValues={
  title: "",
  price: "",
  image: "",
  category: "",
};
//onAddProduct kullanmıştı ama Products'ta ve burada methodlar duruyor nolur nolmaz
//isLoading ve error zaten kullanmadı ama buraya aldı bence eksik yaptı çünkü creatte hata alırsak ekranda döndürmeyecek mesajı
const FormInputs = ({onAddProduct,fetchProductsHandler}) => {
  const [inputValues, setInputValues] = useState(initialValues);
  const { isLoading, error, sendRequest: sendProductRequest } = useHttp(); //sendRequest'in adını fetcProducts yaptık

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // const createProduct = () => {
  //   const generatedId=initialValues.title;
  //   const createdProduct= {id:generatedId,amount:1,...inputValues};

  //   onAddProduct(createdProduct);
  //   setInputValues(initialValues );
  // }     bence gerek yok buna 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newData={
      ...inputValues,
      img:inputValues.image,
    };

    sendProductRequest({
      url:"https://my-pos-application-api.onrender.com/api/products/create-product",
      method:"POST",
      body: newData,
      headers: { "Content-Type": "application/json" },
    },fetchProductsHandler)

  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <div className="form-title">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          onChange={handleInputChange}
          value={inputValues.title}
        />
      </div>
      <div className="form-price">
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          required
          name="price"
          onChange={handleInputChange}
          value={inputValues.price}
        />
      </div>
      <div className="form-category">
        <label htmlFor="category">Category</label>
        <input
          id="category"
          type="text"
          name="category"
          required
          onChange={handleInputChange}
          value={inputValues.category}
        />
      </div>
      <div className="form-img">
        <label htmlFor="img">Image Url</label>
        <input
          id="img"
          type="text"
          name="image"
          required
          onChange={handleInputChange}
          value={inputValues.image}
        />
      </div>
      <button className="button">Add Product</button>
    </form>
  );
};

export default FormInputs;
