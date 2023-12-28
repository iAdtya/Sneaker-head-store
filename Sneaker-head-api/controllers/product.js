import { data } from "../data.js";
import Product from "../models/product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });

    return res.status(200).json({ products });
  } catch (error) {
    console.error(`error in fetching products :: ${error}`);
  }
};

//todo testing
// export const renderForm = async (req, res) => {
//   try {
//     res.render("listProducts");
//   } catch (error) {
//     console.error(`error in rendering form :: ${error}`);
//   }
// };

export const addProduct = async (req, res) => {
  try {
    const newProduct = new Product({
      name: req.body.name,
      description: req.body.description,
      MRP: req.body.MRP,
      img: req.body.img,
    });

    await newProduct.save();
    return res.redirect("back");
  } catch (error) {
    console.error(`error in adding products :: ${error}`);
    res.status(500).send("Server error");
  }
};
