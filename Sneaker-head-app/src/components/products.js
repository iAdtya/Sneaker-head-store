import { useSelector } from "react-redux";
import { productSelector } from "../redux/Reducers/ProductReducers";
import { useEffect } from "react";
import { fetchProducts } from "../redux/Reducers/ProductReducers";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Reducers/ProductReducers";
import { Footer } from "./footer";
import toast from "react-hot-toast";

const notify = () => toast.success("Added to Cart!!");

const Products = () => {
  const products = useSelector(productSelector);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    notify();
  };

  useEffect(() => {
    dispatch(fetchProducts()).catch((error) => {
      console.error("Failed to fetch products:", error);
    });
  }, [dispatch]);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      <div className="p-4">
        <h1 className=" text-2xl font-bold mb-2 mt-16 text-center inline-flex animate-text-gradient bg-gradient-to-r from-[#000000] via-[#7e02fa] to-[#ee1919] bg-[200%_auto] bg-clip-text  text-transparent">
          Welcome, Sneaker Head!!
        </h1>
        <div className="flex justify-center ">
          <div className="grid grid-cols-4 gap-4 items-center  ">
            {products && products.map((product) => (
              <div
                className="card card-compact w-full bg-base-100 shadow-xl rounded-3xl"
                key={product.id}
              >
                <figure>
                  <img
                    className="w-full h-full object-cover rounded-3xl"
                    src={product.img}
                    alt={product.name}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Name:<span className="text-center">{product.name}</span>
                  </h2>

                  <div className="h-44">
                    <p>
                      <span className="font-bold ">Description: </span>
                      {product.description}
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <div className="mt-4">
                      <span className="font-bold">MRP: ₹ {product.MRP}</span>
                    </div>

                    <div className="card-actions justify-end">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="btn btn-primary rounded-3xl"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
