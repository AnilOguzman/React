import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <>
      <h1>My Home Page</h1>
      <Link to="/products">Go to Products Page</Link>
    </>
  );
};

export default HomePage;
