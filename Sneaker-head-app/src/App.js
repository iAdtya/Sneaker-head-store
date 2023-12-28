// import {RouterProvider , createBrowserRouter} from "react-router-dom"
import { Navbar } from "./components/Navabr";
import Products from "./components/products";

function App() {
  // const router = createBrowserRouter([
  //   path:'/',
  //   element: <navbar/>,
  // ])
  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
      {/* <Navbar /> */}
      <Products />
    </>
  );
}

export default App;
