import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement:<ErrorPage/>,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
      { path: "/products/:productId", element: <ProductDetailPage /> },
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
    // <>
    //   <RouterProvider router={router} />
    // </>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout/>}>   
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/products/:productId" element={<ProductDetailPage/>}/>
      </Route>
      <Route path="*" element={<ErrorPage/>}></Route>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
