import { Link, useNavigate,  } from "react-router-dom";


const HomePage = () => {
    const navigate=useNavigate();

    const navigateHandler = () =>{
        navigate("/products");
    }
  return (
    <>

      <h1>My Home Page</h1>
      <Link to="/products">Go to Products Page</Link>

      <button onClick={navigateHandler}>Go to Products</button>
      <span onClick={navigateHandler}>Navigation with span</span>
    </>
  );
};

export default HomePage;
