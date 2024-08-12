import { useState } from "react";
import ProductForm from "./ProductForm";
import AddProduct from "./AddProduct";

const NewProduct = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="new-product-wrapper">
      
      {isOpen===true ? <ProductForm setProducts={props.setProducts} setIsOpen={setIsOpen} /> : <AddProduct setIsOpen={setIsOpen} /> }
      
    </div>
  );
};

export default NewProduct;
