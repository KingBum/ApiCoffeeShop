const router = require("express").Router();
const productController = require("../controllers/product")

//CREATE
router.post("/", productController.createProduct);

//UPDATE
router.put("/:id", productController.updateProduct);

//DELETE POST
router.delete("/:id", productController.deleteProduct);

//GET POST
router.get("/:id", productController.getProduct);

//GET ALL POSTS
router.get("/", productController.getAllProduct);


module.exports = router;