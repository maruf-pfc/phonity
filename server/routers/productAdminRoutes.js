const express = require("express");
const router = express.Router();

const customerMiddleware = require("../middlewares/customerMiddleware");
const adminMiddleware = require("../middlewares/adminMiddleware");
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require("../controllers/adminProductController");

router.get("/", customerMiddleware, adminMiddleware, getAllProducts);
router.post("/", customerMiddleware, adminMiddleware, createProduct);
router.get("/:id", customerMiddleware, adminMiddleware, updateProduct);
router.delete("/:id", customerMiddleware, adminMiddleware, deleteProduct);

module.exports = router;
