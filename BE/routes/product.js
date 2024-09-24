const router = require("express").Router();
const { getSingleProduct, filterProduct } = require("../controllers/product");

// router.route("/").post(addEditProduct); // Create and update a product
router.route("/:productId").get(getSingleProduct); // Get a single product by ID
// router.route("/:productId").post(deleteProduct); // Delete a product by ID
router.route("/").get(filterProduct); // Get All products OR Filter products by search, category, brand, price range, size, color
// router.route("/:productId/reviews").post(getCustomerReview); // Get a product review
// router.route("/:productId/reviews").post(addCustomerReview); // Create a customer review

module.exports = router;
