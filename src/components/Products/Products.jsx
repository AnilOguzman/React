//import products from "../../productData"
import { useState } from "react";
import ProductItem from "./ProductItem";
import FormInputs from "../Form/FormInputs";
import useHttp from "../hooks/use-http";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { isLoading, error, sendRequest: fetchProducts } = useHttp(); //sendRequest'in adını fetcProducts yaptık

  const productList = products
    .map((product) => <ProductItem key={product.id} product={product} />)
    .reverse(); //en son eklenen başa gelsin diye reverse yaptık

  const transformProduct = (productArr) => {
    const newProducts = productArr.map((item) => {
      return {
        id: item._id,
        name: item.title,
        amount: 1,
        ...item,
      };
    });
    setProducts(newProducts);
  };

  const fetchProductsHandler = () => {
    fetchProducts(
      {
        url: "https://my-pos-application-api.onrender.com/api/products/get-all",
      },
      transformProduct
    );
  };

  let content = <p>Found no products!</p>;

  if (products.length > 0) {
    content = productList;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  // const productAddHandler = (newProduct) => {
  //   setProducts((prevProducts) => [
  //     ...prevProducts,
  //     { name: newProduct.title, img: newProduct.image, ...newProduct },
  //   ]);
  // }; //POST için       bence bunlara gerek yok çünkü create için apiye POST isteği gönderdiğimizde zaten otomatik ekliyor olması lazım
  //                     listenin de tekrar yenilenmesi için GET isteğini tekrar atmamız lazım bunu props olarak geçirdim ve useHttp'ye gönderip
  //                     kullandım böylece hem ekledi hem de otomatik liste yenilendi.
  return (
    <main className="products-wrapper">
      <FormInputs
        fetchProductsHandler={fetchProducts}
        // onAddProduct={productAddHandler}
      />
      <ul className="products">{content}</ul>
      <button className="button" onClick={fetchProductsHandler}>
        Fetch Products
      </button>
    </main>
  );
};

export default Products;
