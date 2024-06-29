import express from "express";
import { getAllProducts, getAllStaticProducts } from "../controllers/products.js";

const router = express.Router()

router.route("/").get(getAllProducts)
router.route("/static").get(getAllStaticProducts)

export default router