import { useDispatch } from "react-redux";
import { addProduct } from "../redux/Reducers/ProductReducers";
import { useNavigate } from "react-router-dom";

export const ProductAdd = () => {
  const dispatch = useDispatch();
  // const products = useSelector(productSelector);
  // dispatch(addProduct(products));
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const img = e.target.img.value;
    const MRP = e.target.MRP.value;

    const product = { name, description, img, MRP };
    console.log(product);
    try {
      await dispatch(addProduct(product));
      console.log("Product added successfully!!");
      navigate("/");
    } catch (error) {
      console.log("Failed to add product:", error);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="card card-compact w-96 mt-20 bg-red-300 ">
        <h1 className="text-4xl mb-6 mt-10 text-center text-black">
          Add Sneaker!!
        </h1>
        <form
          onSubmit={handleSubmit}
          className="bg-yellow shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="name"
              required
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
              type="description"
              required
              placeholder="Description"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="img"
            >
              IMG
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="img"
              name="img"
              type="img"
              required
              placeholder="IMG"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-black text-sm font-bold mb-2"
              htmlFor="MRP"
            >
              MRP
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="MRP"
              name="MRP"
              type="MRP"
              required
              placeholder="MRP"
            />
          </div>
          <button type="submit" className="btn w-full  btn-primary ">
            Add Sneaker
          </button>
        </form>
      </div>
    </div>
  );
};
