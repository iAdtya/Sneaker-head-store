import axios from "axios";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("http://localhost:8000/api/products");
      console.log(response.data);
      setProducts(response.data.products);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <h1>Listing all the product!!</h1>
        <div>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                {product.name}
                {product.description}
                {product.MRP}
                {product.img}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Products;
