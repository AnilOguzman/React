import {
    createBrowserRouter,
  } from "react-router-dom";
  import HomePage from "./pages/Home";
  import ProductsPage from "./pages/Products";
  import RootLayout from "./pages/Root";
  import ErrorPage from "./pages/Error";
  import ProductDetailPage from "./pages/ProductDetail";
  
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
export default router;