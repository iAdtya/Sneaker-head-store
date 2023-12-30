import { deleteProduct } from "../redux/Reducers/ProductReducers";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { checkout } from "../redux/Reducers/ProductReducers";

export const Cart = () => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCart(JSON.parse(localStorage.getItem("cart")) || []);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const subtotal = cart.reduce((total, product) => total + product.MRP, 0);
  const shipping = subtotal * 0.05;
  const total = subtotal + shipping;

  const removeProduct = (productToRemove) => {
    // Parse the cart from local storage
    let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    // Find the index of the product to be removed
    const index = cartItems.findIndex(
      (product) => product.id === productToRemove.id
    );

    // If the product is found, remove it
    if (index !== -1) {
      cartItems.splice(index, 1);

      // Stringify the updated cart array and save it back to local storage
      localStorage.setItem("cart", JSON.stringify(cartItems));

      // Update the state to trigger a re-render of the component
      setCart(cartItems);
    }
  };

  return (
    <>
      <div className="h-screen pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">
          {cart.length === 0 ? "Cart Empty 🥹 " : "Cart Items 🥳"}
        </h1>
        <div
          id="card"
          className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
        >
          <div className="rounded-lg md:w-2/3 ">
            {cart.map((Products) => (
              <div
                key={Products.id}
                className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
              >
                <img
                  src={Products.img}
                  alt={Products.name}
                  className="w-full rounded-lg sm:w-40"
                />
                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                  <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">
                      {Products.name}
                    </h2>
                    <p className="mt-1 text-xs text-gray-700">
                      MRP: ₹ {Products.MRP}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                    <div className="flex items-center border-gray-100">
                      <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"></span>
                      <input
                        className="h-8 w-8 border bg-white text-center text-xs outline-none"
                        type="number"
                        min="1"
                      />
                      <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"></span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <p className="text-sm">₹ {Products.MRP}</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          removeProduct(Products);
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                        // stroke-width="1.5"
                        stroke="currentColor"
                        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                      >
                        <path
                          // strokelinecap="round"
                          // strokelinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">₹{subtotal}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">₹{shipping.toFixed(2)}</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">₹{total}</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button
              onClick={() => dispatch(checkout(total))}
              className="mt-6 w-full rounded-md bg-lime-500 py-1.5 font-medium text-blue-50 hover:bg-lime-600"
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
