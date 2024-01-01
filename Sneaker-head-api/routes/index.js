import express from "express";

const router = express.Router();

import { addProduct, getProducts } from "../controllers/product.js";
import { renderForm } from "../controllers/product.js";

router.get("/products", getProducts);
router.get("/form", renderForm);
router.post("/addProduct", addProduct);
router.get("/health", (req, res) => {
  return res.status(200).json({ message: "Everything is working fine" });
});
console.log("router loaded");

export default router;
