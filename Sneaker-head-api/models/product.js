import mongoose from "mongoose";

// this creates new instance of mongoose schema
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  MRP: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
});

//function in Mongoose that creates a new model with name product
const Product = mongoose.model("Product", productSchema);

export default Product;
