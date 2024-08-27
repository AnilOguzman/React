import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  }, //layoutsun ve altında render edeceğin sayfalar var diyoruz children özelliği ile
]);

// const routeDefinitions=createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage/>} />
//     <Route path="/products" element={<ProductsPage/>} />
//   </Route>
// );
// const router=createBrowserRouter(routeDefinitions);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
