import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navabr";
import Products from "./components/products";


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
