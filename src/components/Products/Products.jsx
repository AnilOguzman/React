//import products from "../../productData"
import { useCallback, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./Products.css";
import FormInputs from "../Form/FormInputs";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const productList = [
    products.map((product) => (
      <ProductItem key={product.id} product={product} />
    )),
  ].reverse(); //en son eklenen başa gelsin diye reverse yaptık

  // const fetchProductsHandler = () => {
  //   // fetch(
  //   //   "https://my-pos-application-api.onrender.com/api/products/get-all"
  //   // )
  //   //   .then((response) => {
  //   //     return response.json();
  //   //   })
  //   //   .then((data)=>{
  //   //     const newData = data.map((item)=>{
  //   //       return ({
  //   //         id:item._id,
  //   //         name:item.title,
  //   //         amount:1,
  //   //         ...item,
  //   //       });
  //   //     })
  //   //     setProducts(newData);
  //   //   });       bu yöntemde async await kullanmadık bu yüzden then kullanmak zorunda kaldık
  // };

  const fetchProductsHandler = useCallback (async function()  {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://my-pos-application-api.onrender.com/api/products/get-all"
      );

      if(response.status !== 200){
        throw new Error("Something went wrong!");  //bu fırlatılanı aşağı catchde yakalar
      }
      const data = await response.json();
      const newData = data.map((item) => {
        return {
          id: item._id,
          name: item.title,
          amount: 1,
          ...item,
        };
      });
      setProducts(newData); //burada da async ve await kullandık awaitin amacı sağdaki işlem bitmeden aşağı geçme demek
      //yani sağdaki işlemden bi sonuç döncekki aşağı geçsin kullanmazsak sonucu beklemeden direkt aşağı geçer ve hata yaratır.
      
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  },[]) 
  

  useEffect(()=>{
    fetchProductsHandler();
  },[fetchProductsHandler]); //en başta bi kere çağırsın ve bidaha api değiştiğinde çağırsın diyoruz ancak 
  //front endde sayfayı gidip incelediğimizde network kısmında durmadan istek attığını gördük bunu engellemek için
  //optimizasyon tekniklerinden olan callback hookunu kullandık fetchProductsHandler fonksiyonu için.

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

  return (
    <main className="products-wrapper">
      <FormInputs fetchProductsHandler={fetchProductsHandler}/>
      <ul className="products">{content}</ul>
      <button className="button" onClick={fetchProductsHandler}>
        Fetch Products
      </button>
    </main>
  );
};

export default Products;
