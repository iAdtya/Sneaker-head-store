import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]   dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="navbar">
          <div className="flex-1">
            <NavLink to="/" className="btn btn-ghost text-xl text-lime-400">
              SNEAKER STORE
            </NavLink>
          </div>
          <div className="flex-none">
            <div className="mr-4">
              <NavLink
                to="/orders"
                className="btn  btn-active btn-primary ml-4  rounded-xl"
              >
                Orders
              </NavLink>
            </div>
            <NavLink
              to="/cart"
              className="btn  btn-active btn-primary rounded-xl"
            >
              Go to Cart
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
