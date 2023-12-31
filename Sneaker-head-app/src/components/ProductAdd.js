import { useDispatch } from "react-redux";
import { addProduct } from "../redux/Reducers/ProductReducers";

export const ProductAdd = () => {
  const dispatch = useDispatch();
  // const products = useSelector(productSelector);
  // dispatch(addProduct(products));

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const description = e.target.description.value;
    const img = e.target.img.value;
    const MRP = e.target.MRP.value;

    dispatch(addProduct({ name, description, img, MRP }));
  };
  console.log(handleSubmit);

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
              type="text"
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
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              name="description"
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
              type="url"
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
              type="number"
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
