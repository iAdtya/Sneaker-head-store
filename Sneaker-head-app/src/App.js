import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navabr";
import Products from "./components/products";
import { ProductAdd } from "./components/ProductAdd";
import { Cart } from "./components/Cart";
import { Orders } from "./components/Orders";

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
        {
          path: "/orders",
          element: <Orders />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow">
          <RouterProvider router={router} />
        </div>
      </div>
    </>
  );
}

export default App;
