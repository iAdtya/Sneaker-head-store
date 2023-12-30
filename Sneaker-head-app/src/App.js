import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navabr";
import Products from "./components/products";
import { ProductAdd } from "./components/ProductAdd";
import { Cart } from "./components/Cart";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <div>404</div>,
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: "/add",
          element: <ProductAdd />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
