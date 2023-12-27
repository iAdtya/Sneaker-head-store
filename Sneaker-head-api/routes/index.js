import express from "express";

const router = express.Router();

import { addProduct, getProducts, renderForm } from "../controllers/product.js";

router.get("/products", getProducts);
router.get("/form", renderForm);
router.post("/addProduct", addProduct);

console.log("router loaded");

export default router;
