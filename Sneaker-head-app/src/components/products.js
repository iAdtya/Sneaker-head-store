import { useSelector } from "react-redux";
import { productSelector } from "../redux/Reducers/ProductReducers";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/Reducers/ProductReducers";

const Products = () => {
  const products = useSelector(productSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      <div className="p-4">
        <h1 className=" text-2xl font-bold mb-4 mt-10 text-center inline-flex animate-text-gradient bg-gradient-to-r from-[#000000] via-[#7e02fa] to-[#ee1919] bg-[200%_auto] bg-clip-text  text-transparent">
          Hii, Sneaker Head!!
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-4 items-center ">
            {products.map((products) => (
              <div
                className="card card-compact w-full bg-base-100 shadow-xl"
                key={products._id}
              >
                <figure>
                  <img
                    className="w-full h-full object-cover"
                    src={products.img}
                    alt={products.name}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Name:<span className="text-center">{products.name}</span>
                  </h2>

                  <div className="h-44">
                    <p>
                      <span className="font-bold ">Description: </span>
                      {products.description}
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <div className="mt-4">
                      <span className="font-bold">MRP:₹{products.MRP}</span>
                    </div>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
